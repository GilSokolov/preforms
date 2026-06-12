import { Component } from "@angular/core";
import { FormArray, FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CheckboxGroupField } from "@preforms/ts";
import { DynamicFormElement, BaseFieldComponent } from "@preforms/angular/core";

@DynamicFormElement({ component: "checkbox-group" })
@Component({
  selector: "preforms-mat-checkbox-group",
  template: `
    <div [formArray]="control" class="preforms-checkbox-group">
      <div class="preforms-checkbox-group-header">
        {{ field.label }}
      </div>
      @for (option of field.fields; track $index; let i = $index) {
        <mat-checkbox
          [value]="option.value"
          (change)="update($event.checked, i, option.value)"
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
  CheckboxGroupField
> {
  update(checked: boolean, i: number, value: any) {
    if (checked) {
      this.control.push(new FormControl(value));
    } else {
      this.control.removeAt(i);
    }
  }
}
