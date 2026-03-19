import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { RadioField } from "@preforms/ts";

@DynamicFormElement({ component: "radio" })
@Component({
  selector: "preforms-radio-field",
  template: `
    <strong class="preforms-radio-field-header">
      {{ field.label }}
    </strong>
    @for (option of field.options; track $index) {
      <label [class]="field.className">
        <input
          type="radio"
          [id]="field.id"
          [name]="field.key"
          [value]="option.value"
          [formControl]="control"
        />
        <span class="label-text">{{ option.label }}</span>
        <span class="description">{{ option.description }}</span>
      </label>
    }

    @if (field.hint) {
      <small class="preforms-form-field-hint">
        {{ field.hint }}
      </small>
    }

    @if (error) {
      <p class="preforms-form-field-error" aria-live="polite">
        {{ error }}
      </p>
    }
  `,
  imports: [ReactiveFormsModule],
})
export class RadioFieldComponent extends BaseFieldComponent<
  FormControl,
  RadioField
> {}
