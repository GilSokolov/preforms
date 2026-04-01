import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
} from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import {
  FieldEventData,
  FormElement,
  FormEventType,
  FormFieldEventType,
  FormSchema,
} from "@preforms/ts";
import { FormEvent, FormFieldEvent } from "./decorators";
import { DynamicFieldGroupComponent } from "./fields/base/dynamic-field-group.component";
import { FormHost } from "./form-host";
import { DynamicFormSubmitEvent } from "./models";
import { preformsProviders } from "./providers/performs-providers";
import { FormService } from "./services";

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

  @FormFieldEvent({ field: "*", type: FormFieldEventType.CHANGE })
  onFieldChange(e: FieldEventData) {
    this.fieldChange.next(e);
  }

  private init() {
    const fields = this.formSchema.fields;

    this.formService.init(fields);
  }
}
