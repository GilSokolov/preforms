import { inject, Injectable } from "@angular/core";
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from "@angular/forms";

import {
  FieldArray,
  FieldGroup,
  FieldWrapper,
  FormElement,
  FormField,
} from "@preforms/ts";
import { FormValidationService } from "./validation.service";
import { FormStateService } from "./state.service";

/** A field and the control it was registered with. */
export interface FieldRegistration {
  field: FormElement;
  control: AbstractControl;
}

@Injectable({
  providedIn: "root",
})
export class FormFactoryService {
  private stateService = inject(FormStateService);
  private validationService = inject(FormValidationService);

  build(fields: FormElement[]) {
    return this.buildGroup(fields, []);
  }

  /**
   * Builds a group and reports what was registered with FormStateService, so a
   * caller that later changes those fields' ids (an array row changing
   * position) can re-register them without walking the tree again.
   */
  buildRow(fields: FormElement[]): {
    group: FormGroup;
    registrations: FieldRegistration[];
  } {
    const registrations: FieldRegistration[] = [];
    const group = this.buildGroup(fields, registrations);

    return { group, registrations };
  }

  /** Registers a field and records the registration for the caller. */
  private register(
    field: FormElement,
    control: AbstractControl,
    registrations: FieldRegistration[],
  ) {
    this.stateService.set(field, control);
    registrations.push({ field, control });
  }

  private buildGroup(
    fields: FormElement[],
    registrations: FieldRegistration[],
  ): FormGroup {
    const group: Record<string, FormArray | FormGroup | FormControl> = {};

    for (const field of fields) {
      if (field.kind === "decorative") {
        const control = new FormControl();
        if (field.key) group[field.key] = control;
        this.register(field, control, registrations);
        continue;
      }

      if (field.kind === "button") {
        this.register(field, new FormControl(), registrations);
        continue;
      }

      if (field.kind === "external") {
        const control = new FormControl(field.value);
        if (field.key) group[field.key] = control;
        this.register(field, control, registrations);
        continue;
      }

      // handle container fields
      if (field.kind === "wrapper" && field.key === undefined) {
        const nested = this.buildGroup(field.fields, registrations);

        Object.assign(group, nested.controls);

        continue;
      }

      const control = this.getControl(field, registrations);

      if (field.disabled) {
        control.disable({ emitEvent: false });
      }

      if (field.key) {
        group[field.key] = control;
        this.register(field, control, registrations);
      }
    }
    return new FormGroup(group);
  }

  getControl(
    field: FormField | FieldGroup | FieldArray | FieldWrapper,
    registrations: FieldRegistration[] = [],
  ): FormArray<any> | FormGroup<any> | FormControl<unknown> {
    if (field.kind === "array") {
      return new FormArray(
        [] as any,
        this.validationService.getArrayValidators(field),
      );
    }

    if (field.kind === "group" || field.kind === "wrapper") {
      return this.buildGroup(field.fields, registrations);
    }

    return new FormControl(
      field.value,
      this.validationService.getValidators(field),
    );
  }
}
