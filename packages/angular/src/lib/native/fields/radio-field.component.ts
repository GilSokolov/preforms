import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "@preforms/angular/core";
import { BaseFieldComponent } from "@preforms/angular/core";
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
        <span class="preforms-radio-label">{{ option.label }}</span>
        <span class="preforms-radio-description">{{ option.description }}</span>
      </label>
    }

    @if (field.hint) {
      <small class="preforms-field-hint">
        {{ field.hint }}
      </small>
    }

    @if (error) {
      <small class="preforms-field-error" aria-live="polite">
        {{ error }}
      </small>
    }
  `,
  imports: [ReactiveFormsModule],
})
export class RadioFieldComponent extends BaseFieldComponent<
  FormControl,
  RadioField
> {}
