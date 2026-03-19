import { Component } from "@angular/core";
import { FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CheckboxFieldGroup } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";

@DynamicFormElement({ component: "checkbox-group" })
@Component({
  selector: "preforms-mat-checkbox-group-field",
  template: `
    <div [formArray]="control" class="preforms-checkbox-group-field">
      <div class="preforms-checkbox-group-field-header">
        {{ field.label }}
      </div>
      @for (option of field.fields; track $index; let i = $index) {
        <mat-checkbox
          [value]="option.value"
          (change)="update($event.checked, i)"
        >
          {{ option.label }}
        </mat-checkbox>
      }
    </div>
  `,
  imports: [ReactiveFormsModule, MatCheckboxModule],
})
export class CheckboxGroupFieldComponent extends BaseFieldComponent<
  FormArray,
  CheckboxFieldGroup
> {
  update(checked: boolean, i: number, value: any) {
    if (checked) {
      this.control.push(new FormControl(value));
    } else {
      this.control.removeAt(i);
    }
  }
}
