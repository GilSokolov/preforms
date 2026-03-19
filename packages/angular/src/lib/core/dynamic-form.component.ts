import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  FieldEventData,
  FormElement,
  FormEventType,
  FormFieldEventType,
  FormSchema,
  RequestDataEvent,
} from "@preforms/ts";
import { FormEvent, FormFieldEvent } from "./decorators";
import { DynamicFieldGroupComponent } from "./fields/base/dynamic-field-group.component";
import { FormHost } from "./form-host";
import { DynamicFormSubmitEvent } from "./models";
import { preformsProviders } from "./providers/performs-providers";
import { FormService } from "./services";
import { DYNAMIC_FORM_FETCHER } from "./tokens";
import { untilDestroyed } from "./utils/until-destroyed";

@Component({
  selector: "preforms-dynamic-form",
  providers: [preformsProviders()],
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <form
      [id]="formId"
      [formGroup]="form"
      [class]="className"
      (reset)="onReset($event)"
      (ngSubmit)="onSubmit($event)"
    >
      <preforms-dynamic-field-group [fields]="fields" [control]="form" />
    </form>
  `,
})
export class DynamicFormComponent<
  T = Record<string, unknown>,
> extends FormHost {
  private formSchema: FormSchema = { fields: [] };

  @Input() formId = `dynamic-form-${crypto.randomUUID()}`;
  @Input() className = "";

  @Input({ alias: "fields" })
  set inputFields(fields: FormElement[] | undefined) {
    this.formSchema = { fields: fields ?? [] };
    this.init();
  }

  @Input()
  set schema(schema: FormSchema | undefined) {
    if (!schema) return;
    this.formSchema = schema;
    this.formId = schema.id || this.formId;
    this.init();
  }

  @Input()
  set value(value: unknown) {
    if (!value) return;
    this.form.patchValue(value);
  }

  @Output() submitted = new EventEmitter<DynamicFormSubmitEvent<T>>();

  @Output() submittedData = new EventEmitter<T>();

  @Output() fieldChange = new EventEmitter<FieldEventData<unknown>>();

  get form() {
    return this.formService.form;
  }

  get fields(): FormElement[] {
    return this.formService.fields;
  }

  get isInvalid(): boolean {
    return this.form.invalid;
  }

  private readonly formService = inject(FormService);

  private readonly untilDestroyed = untilDestroyed();

  private readonly fetcher = inject(DYNAMIC_FORM_FETCHER, { optional: true });

  @FormEvent(FormEventType.REQUEST_RESET)
  onReset(event?: Event): void {
    event?.preventDefault();
    this.formService.reset();
  }

  @FormEvent(FormEventType.REQUEST_SUBMIT)
  onSubmit(event?: SubmitEvent): void {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (this.isInvalid) return;

    const meta = this.formService.getMetadata(event);

    this.submitted.emit(this.formService.getEventPayload<T>(meta));
    this.submittedData.emit(this.formService.getValues<T>(meta.buttonData));
  }

  @FormEvent(FormEventType.REQUEST_DATA)
  fetchData({ url, mode }: RequestDataEvent): void {
    if (!this.fetcher) return;

    this.fetcher(url)
      .pipe(this.untilDestroyed())
      .subscribe((fields) => this.formService.onDataReady(fields, mode));
  }

  @FormFieldEvent({ field: "*", type: FormFieldEventType.CHANGE })
  onFieldChange(e: FieldEventData) {
    this.fieldChange.next(e);
  }

  private init() {
    const fields = this.formSchema.fields;

    this.formService.init(fields);
  }
}
