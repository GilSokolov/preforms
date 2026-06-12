import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "@preforms/angular/core";
import { BaseFieldComponent } from "@preforms/angular/core";
import { isOptionGroup, SelectField } from "@preforms/ts";
import { FormFieldComponent } from "./form-field.component";

@DynamicFormElement({ component: "select" })
@Component({
  selector: "preforms-select",
  template: `
    <preforms-form-field [field]="field" [control]="control" [error]="error">
      <select
        [id]="field.id"
        [attr.name]="field.name"
        [attr.size]="field.size"
        [formControl]="control"
        [multiple]="field.multiple"
        class="preforms-select-field"
        [autofocus]="field.autofocus"
        [attr.autocomplete]="field.autocomplete"
      >
        @for (item of field.options; track $index) {
          @if (isOptionGroup(item)) {
            <optgroup [label]="item.label" [disabled]="item.disabled">
              @for (option of item.options; track $index) {
                <option [value]="option.value">{{ option.label }}</option>
              }
            </optgroup>
          } @else {
            <option [value]="item.value">{{ item.label }}</option>
          }
        }
      </select>
    </preforms-form-field>
  `,
  imports: [ReactiveFormsModule, FormFieldComponent],
})
export class SelectFieldComponent extends BaseFieldComponent<
  FormControl,
  SelectField
> {
  isOptionGroup = isOptionGroup;
}
