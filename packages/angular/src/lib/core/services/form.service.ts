import { ChangeDetectorRef, inject, Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  CrossFieldValidation,
  FetchMode,
  fetchProjection,
  FetchProjection,
  FieldArray,
  FieldEventData,
  FieldGroup,
  FormElement,
  FormEventType,
  FormField,
  FormFieldEventType,
  FormFieldTrigger,
  TriggerContext,
  TriggerEngine,
  TriggerEvent,
} from "@preforms/ts";

import { DynamicFormSubmitEvent } from "../models/submit-payload.model";

import { SubmitMetadata } from "../models/submit-metadata";
import { DYNAMIC_FORM_FETCHER } from "../tokens";
import { untilDestroyed } from "../utils";
import { convertToNestedObject } from "../utils/convertToNestedObject.util";
import { deepMerge } from "../utils/deep-merge";
import { EventService } from "./event.service";
import { FormFactoryService } from "./form-factory.service";
import { FieldLookupResult, FormStateService } from "./state.service";
import { FormValidationService } from "./validation.service";

@Injectable()
export class FormService implements TriggerContext {
  formId = `dynamic-form-${crypto.randomUUID()}`;
  fields!: FormElement[];
  form!: FormGroup;

  private files = new Map<string, File[]>();

  private untilDestroyed = untilDestroyed();

  private defaultValues: unknown;

  private eventService = inject(EventService);
  private stateService = inject(FormStateService);
  private factoryService = inject(FormFactoryService);
  private validationService = inject(FormValidationService);

  private triggerEngine = new TriggerEngine(this);
  private readonly fetcher = inject(DYNAMIC_FORM_FETCHER, { optional: true });
  private cd = inject(ChangeDetectorRef);

  constructor() {
    this.handleEvents();
  }

  get isValid(): boolean {
    return this.form.valid;
  }

  getValues<T = Record<string, unknown>>(
    buttonData: Record<string, unknown> = {},
  ): T {
    return { ...convertToNestedObject(this.form.value), ...buttonData };
  }

  getFormData(buttonData?: Record<string, unknown>): FormData {
    const values = this.getValues(buttonData);
    // Build FormData
    const formData = new FormData();

    this.files.forEach((fileArray, key) => {
      if (fileArray.length === 1) {
        // Single file: append normally
        formData.append(key, fileArray[0]);
      } else {
        // Multiple files: append as an array
        fileArray.forEach((file) => formData.append(`${key}[]`, file));
      }
    });

    Object.entries(values).forEach(([key, value]) => {
      if (value != null) formData.append(key, String(value));
    });

    return formData;
  }

  openDialog(id: string): void {
    this.updateState([id], { disabled: false });
  }

  closeDialog(id: string): void {
    this.updateState([id], { disabled: true });
  }

  updateState(ids: string[], state: Partial<FormElement>): void {
    ids.forEach((id: string) => {
      const res = this.stateService.get(id);

      if (res) this.setState(res, state);
    });
  }

  requestSubmit(): void {
    this.eventService.emitFormEvent(FormEventType.REQUEST_SUBMIT);
  }

  requestReset(): void {
    this.eventService.emitFormEvent(FormEventType.REQUEST_RESET);
  }

  fetch(
    url: string,
    mode: FetchMode,
    mapper?: FetchProjection,
    id?: string,
  ): void {
    if (!this.fetcher) return;

    this.fetcher(url)
      .pipe(this.untilDestroyed())
      .subscribe((res: unknown) => {
        this.onDataReady(this.normalizeData(res, mapper, id), mode);
      });
  }

  patchValue(id: string, value: unknown): void {
    this.stateService.patchValue(id, value);
  }

  validate(id: string, validation: CrossFieldValidation): void {
    const source = this.stateService.get(id);
    const compareTo = this.stateService.get(validation.compareTo);

    if (source && compareTo)
      this.validationService.validate(
        source.control,
        validation,
        compareTo.control.value,
      );
  }

  toggleFieldState(
    ids: string[],
    props: ("hidden" | "disabled" | "required")[],
  ): void {
    ids.forEach((id: string) => {
      const res = this.stateService.get(id);
      if (!res) return;

      const state: Record<string, boolean> = {};

      props.forEach((prop) => (state[prop] = !res.field[prop]));

      this.setState(res, state);
    });
  }

  init(fields: FormElement[]): FormGroup {
    this.stateService.clear();
    const form = this.factoryService.build(fields);

    this.form = form;

    this.fields = this.sortFields(fields);

    this.defaultValues = this.getValues();

    this.cd.detectChanges();

    return form;
  }

  reset() {
    this.form.reset(this.defaultValues);
    this.files.clear();
  }

  getEventPayload<T = Record<string, undefined>>(
    meta: SubmitMetadata = {},
  ): DynamicFormSubmitEvent<T> {
    const { action, method, buttonData } = meta;
    return {
      data: this.getFormData(buttonData),
      raw: this.getValues(buttonData),
      action,
      method,
    };
  }

  emitFieldEvent(type: TriggerEvent, field: FormElement, value: unknown) {
    const fieldKey = (field as FieldGroup | FieldArray | FormField).key;
    const event: FieldEventData = {
      type,
      id: field.id,
      name: field.name || fieldKey || field.id,
      value,
    };

    this.eventService.emitFieldEvent(event);
  }

  onDataReady(fields: FormElement[], mode: FetchMode): void {
    switch (mode) {
      case "patch":
        fields.forEach((field) => this.patchField(field));

        break;

      case "replace":
        this.init(fields);
        break;

      case "merge":
        this.mergeFields(fields);
        break;
    }
  }

  getMetadata(event?: SubmitEvent): SubmitMetadata {
    const submitter = event?.submitter;

    if (submitter instanceof HTMLButtonElement) {
      const name = submitter?.getAttribute("name");
      const value = submitter?.getAttribute("value");
      const buttonData = name ? { [name]: value || true } : undefined;
      const action = submitter?.getAttribute("formaction");
      const method = submitter?.getAttribute("formmethod");

      return {
        buttonData,
        action,
        method,
      };
    }

    return {};
  }

  private mergeFields(fields: FormElement[]) {
    const uniqueFields: FormElement[] = [];

    fields.forEach((field) => {
      const existing = this.stateService.get(field.id);

      if (existing) {
        this.patchField(field);
      } else {
        uniqueFields.push(field);
      }
    });

    if (!this.form) {
      this.init(uniqueFields);
      return;
    }

    const group = this.factoryService.build(uniqueFields);

    Object.entries(group.controls).forEach(([key, ctrl]) => {
      this.form.registerControl(key, ctrl);
    });

    this.fields = this.sortFields([...this.fields, ...uniqueFields]);

    this.cd.detectChanges();
  }

  private patchField(field: FormElement) {
    const existing = this.stateService.get(field.id);

    if (existing) this.setState(existing, field);

    this.cd.detectChanges();
  }

  private setState(res: FieldLookupResult, state: Partial<FormElement>) {
    const control = res.control;
    if (control) {
      this.validationService.setValidators(control, res.field.kind, state);

      if (state["disabled"] !== undefined)
        state["disabled"] ? control.disable() : control.enable();
      if (state["value"] !== undefined) control.patchValue(state["value"]);

      if (state.value !== undefined) {
        this.emitFieldEvent(FormFieldEventType.INPUT, res.field, state.value);
      }

      control.updateValueAndValidity();

      if (state.errors) {
        control.setErrors(state.errors);
      }
    }

    // update config state for props like hidden and others that do not exist on AbstractControl
    deepMerge(res.field, state);

    this.cd.detectChanges();
  }

  private handleEvents() {
    this.eventService
      .onFormFieldEvent("*.*")
      .pipe(this.untilDestroyed())
      .subscribe((e) => {
        if (e.value instanceof FileList)
          this.files.set(e.name, Array.from(e.value));
        else this.files.delete(e.name);

        const listeners = this.stateService.getListeners(e.id);

        if (listeners) {
          listeners.forEach((l) => {
            this.triggerEngine.runFieldTriggers(
              l.field.triggers as FormFieldTrigger[],
              { ...e, id: l.field.id },
              e.id,
            );
          });
        }

        const res = this.stateService.get(e.id);

        if (!res) return;

        if (res.field.triggers) {
          this.triggerEngine.runFieldTriggers(res.field.triggers, e);
        }
      });
  }

  private sortFields(fields: FormElement[]) {
    return [...fields].sort(
      (a, b) => (a.order || Infinity) - (b.order || Infinity),
    );
  }

  private normalizeData(
    res: unknown,
    mapper?: FetchProjection,
    id?: string,
  ): FormElement[] {
    const result = mapper
      ? fetchProjection(res, mapper)
      : (res as Partial<FormElement> | Partial<FormElement>[]);

    const fields = Array.isArray(result) ? result : [result];

    return fields.map((field: Partial<FormElement>) => {
      const res = field.id ? this.stateService.get(field.id) : { field: null };

      const existing = res?.field || {};

      return {
        id,
        ...existing,
        ...field,
      } as FormElement;
    });
  }
}
