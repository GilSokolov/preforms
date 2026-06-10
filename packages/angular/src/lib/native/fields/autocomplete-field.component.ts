import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { InputField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { AriaAttributesDirective } from "../../core/directives";
import { BaseFieldComponent } from "../../core/fields";
import { FormFieldComponent } from "./form-field.component";

@DynamicFormElement({ component: "autocomplete" })
@Component({
  selector: "preforms-autocomplete",
  template: `
    <preforms-form-field [field]="field" [control]="control" [error]="error">
      <input
        [id]="field.id"
        [type]="field.type"
        [name]="field.name"
        [pfAria]="field.aria"
        [attr.list]="listName"
        [formControl]="control"
        class="preforms-input"
        [attr.multiple]="field.multiple ? '' : null"
        [attr.spellcheck]="field.spellcheck"
        [attr.placeholder]="field.placeholder"
        [attr.autocomplete]="field.autocomplete"
      />

      @if (field.options) {
        <datalist class="preforms-datalist" [id]="listName">
          @for (item of field.options; track $index) {
            <option class="preforms-datalist-option" [value]="item.value">
              {{ item.label }}
            </option>
          }
        </datalist>
      }
    </preforms-form-field>
  `,
  imports: [FormFieldComponent, ReactiveFormsModule, AriaAttributesDirective],
})
export class AutocompleteFieldComponent extends BaseFieldComponent<
  FormControl,
  InputField
> {
  get listName() {
    return this.field.options ? `${this.field.id}-list` : undefined;
  }
}
