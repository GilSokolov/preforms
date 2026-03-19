import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { InputField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { AriaAttributesDirective } from "../../core/directives";
import { BaseFieldComponent } from "../../core/fields";
import { FormFieldComponent } from "./form-field.component";

@DynamicFormElement({ component: "number" })
@Component({
  selector: "preforms-number-input",
  template: `
    <preforms-form-field [field]="field" [control]="control" [error]="error">
      <input
        type="number"
        [id]="field.id"
        [name]="field.name"
        [pfAria]="field.aria"
        [attr.list]="listName"
        [formControl]="control"
        [attr.step]="field.step"
        class="preforms-input-field"
        [attr.readonly]="field.readonly"
        [attr.autofocus]="field.autofocus"
        [attr.placeholder]="field.placeholder"
        [attr.autocomplete]="field.autocomplete"
      />
    </preforms-form-field>
  `,
  imports: [FormFieldComponent, ReactiveFormsModule, AriaAttributesDirective],
})
export class NumberInputComponent extends BaseFieldComponent<
  FormControl,
  InputField
> {
  get listName() {
    return this.field.options ? `${this.field.id}-list` : undefined;
  }
}
