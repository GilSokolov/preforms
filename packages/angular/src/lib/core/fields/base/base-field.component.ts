import {
  Component,
  DestroyRef,
  HostBinding,
  HostListener,
  inject,
  Input,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";
import {
  FieldEventData,
  FormElement,
  FormField,
  FormFieldEventType,
} from "@preforms/ts";
import { EventService } from "../../services";
import { getValidationMessage } from "../../utils/validation-helpers";

@Component({
  selector: "preforms-base-field",
  template: ``,
})
export class BaseFieldComponent<
  T extends AbstractControl,
  F extends FormElement = FormField<any>,
> {
  @Input() field!: F;
  @Input() control!: T;

  get error(): string {
    const { errors } = this.control;
    if (!errors || !this.control.touched) return "";

    const errorMessages = Object.entries(errors).map(([key, value]) => {
      // Extract message if available
      const message =
        typeof value === "object" && "message" in value
          ? value.message
          : undefined;
      return getValidationMessage(key, this.field, message);
    });

    return `${this.field.label} ${errorMessages.join(" and ")}`;
  }

  readonly __eventService = inject(EventService);

  private destroyRef = inject(DestroyRef);

  constructor() {
    this.__eventService.bindDecoratedHandlers(this, this.destroyRef);

    setTimeout(() => {
      this.emit(FormFieldEventType.INIT);
    });
  }

  @HostBinding("attr.data-field-id")
  get dataFieldId(): string | null {
    return this.field.id;
  }

  @HostListener("click", ["$event.target"])
  protected handleClick(target: EventTarget | null) {
    if (target instanceof HTMLButtonElement)
      this.emit(FormFieldEventType.CLICK, target);
  }

  @HostListener("input", ["$event.target"])
  protected handleInput(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) return;
    this.emit(FormFieldEventType.INPUT, target);
  }

  @HostListener("focusout", ["$event.target"])
  protected handleBlur(target: EventTarget | null) {
    if (target instanceof HTMLButtonElement) return;
    if (target instanceof HTMLElement)
      this.emit(FormFieldEventType.BLUR, target);
  }

  @HostListener("focusin", ["$event.target"])
  protected handleFocus(target: EventTarget | null) {
    if (target instanceof HTMLButtonElement) return;
    if (target instanceof HTMLElement)
      this.emit(FormFieldEventType.FOCUS, target);
  }

  @HostListener("change", ["$event.target"])
  protected handleChange(target: EventTarget | null) {
    if (target instanceof HTMLElement) {
      this.emit(FormFieldEventType.CHANGE, target);
      if (target instanceof HTMLInputElement && target.type === "checkbox") {
        const type = target.checked
          ? FormFieldEventType.CHECKED
          : FormFieldEventType.UNCHECKED;
        this.emit(type, target);
      }

      if (target instanceof HTMLSelectElement && target.selectedIndex >= 0)
        this.emit(FormFieldEventType.SELECTED, target);
    }
  }

  emit(
    type: FormFieldEventType | `${FormFieldEventType}`,
    target?: HTMLElement,
  ) {
    if (target) {
      const el = target.closest<HTMLElement>("[data-field-id]");
      if (!el || el.dataset["fieldId"] !== this.field.id) return;
    }

    // Build base payload
    const payload: FieldEventData = {
      type,
      name: this.field.name || "",
      id: this.field.id,
      value: this.control.value,
    };

    // Handle file inputs separately
    if (
      target instanceof HTMLInputElement &&
      target.files?.length &&
      type === "change"
    ) {
      payload.value = target.files;
    }

    this.__eventService.emitFieldEvent(payload);
  }
}
