import { Component } from "@angular/core";
import { FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";

import { CheckboxFieldGroup } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";

@DynamicFormElement({ component: "checkbox-group" })
@Component({
  selector: "preforms-checkbox-group",
  template: `
    <div [formArray]="control" class="preforms-checkbox-group">
      <div class="preforms-checkbox-group-header">
        {{ field.label }}
      </div>
      @for (option of field.fields; track $index; let i = $index) {
        <label [class]="field.className">
          <input
            type="checkbox"
            [value]="option.value"
            (change)="update($event.target)"
          />
          <span class="label-text">{{ option.label }}</span>
          <span class="description">{{ option.description }}</span>
        </label>
      }
    </div>
  `,
  imports: [ReactiveFormsModule],
})
export class CheckboxGroupFieldComponent extends BaseFieldComponent<
  FormArray,
  CheckboxFieldGroup<string>
> {
  update(checkbox: HTMLInputElement) {
    if (checkbox.checked) {
      this.control.push(new FormControl(checkbox.value));
    } else {
      this.control.removeAt(this.control.value.indexOf(checkbox.value));
    }
  }
}
