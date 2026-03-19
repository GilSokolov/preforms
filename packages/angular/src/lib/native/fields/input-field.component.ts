import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { InputField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { AriaAttributesDirective } from "../../core/directives";
import { BaseFieldComponent } from "../../core/fields";
import { FormFieldComponent } from "./form-field.component";

@DynamicFormElement({ component: "input" })
@Component({
  selector: "preforms-input-field",
  template: `
    <preforms-form-field [field]="field" [control]="control" [error]="error">
      <input
        [id]="field.id"
        [type]="field.type"
        [name]="field.name"
        [pfAria]="field.aria"
        [attr.list]="listName"
        [formControl]="control"
        class="preforms-input-field"
        [attr.multiple]="field.multiple"
        [attr.spellcheck]="field.spellcheck"
        [attr.placeholder]="field.placeholder"
        [attr.autocomplete]="field.autocomplete"
      />

      @if (field.options) {
        <datalist class="preforms-form-field-datalist" [id]="listName">
          @for (item of field.options; track $index) {
            <option
              class="preforms-form-field-datalist-option"
              [value]="item.value"
            >
              {{ item.label }}
            </option>
          }
        </datalist>
      }
    </preforms-form-field>
  `,
  imports: [FormFieldComponent, ReactiveFormsModule, AriaAttributesDirective],
})
export class InputFieldComponent extends BaseFieldComponent<
  FormControl,
  InputField
> {
  get listName() {
    return this.field.options ? `${this.field.id}-list` : undefined;
  }
}
