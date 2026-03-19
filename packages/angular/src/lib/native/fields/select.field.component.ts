import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { isOptionGroup, SelectField } from "@preforms/ts";
import { FormFieldComponent } from "./form-field.component";

@DynamicFormElement({ component: "select" })
@Component({
  selector: "preforms-select-field",
  template: `
    <preforms-form-field [field]="field" [control]="control" [error]="error">
      <select
        [id]="field.id"
        [attr.name]="field.name"
        [attr.size]="field.size"
        [formControl]="control"
        [attr.multiple]="field.multiple"
        class="preforms-select-field"
        [attr.autofocus]="field.autofocus"
        [attr.autocomplete]="field.autocomplete"
      >
        @for (item of field.options; track $index) {
          @if (isOptionGroup(item)) {
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
