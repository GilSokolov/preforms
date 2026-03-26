import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";

import { CheckboxGroupField } from "@preforms/ts";
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
            [checked]="isSelected(option.value)"
          />
          <span class="label-text">{{ option.label }}</span>
          <span class="description">{{ option.description }}</span>
        </label>
      }
    </div>
  `,
  imports: [ReactiveFormsModule],
})
export class CheckboxGroupFieldComponent
  extends BaseFieldComponent<FormArray, CheckboxGroupField<string>>
  implements OnInit
{
  ngOnInit(): void {
    if (this.field.value) {
      this.field.value.forEach((value) =>
        this.control.push(new FormControl(value)),
      );
    }
  }

  update(checkbox: HTMLInputElement) {
    if (checkbox.checked) {
      this.control.push(new FormControl(checkbox.value));
    } else {
      this.control.removeAt(this.control.value.indexOf(checkbox.value));
    }
  }

  isSelected(value: any) {
    return this.control.value.includes(value);
  }
}
