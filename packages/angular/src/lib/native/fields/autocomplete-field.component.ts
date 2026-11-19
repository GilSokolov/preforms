import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { flattenOptions, InputField } from "@preforms/ts";

import {
  AriaAttributesDirective,
  BaseFieldComponent,
  DynamicFormElement,
} from "@preforms/angular/core";

import { FormFieldComponent } from "./form-field.component";
import { CONTROL_STYLES } from "./native-styles";

@DynamicFormElement({ component: "autocomplete" })
@Component({
  selector: "preforms-autocomplete",
  styles: CONTROL_STYLES,
  template: `
    <preforms-form-field [field]="field" [control]="control" [error]="error">
      <input
        [id]="field.id"
        [type]="field.type || 'text'"
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
          @for (item of flatOptions; track $index) {
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
  get flatOptions() {
    return flattenOptions(this.field.options);
  }

  get listName() {
    return this.field.options ? `${this.field.id}-list` : undefined;
  }
}
