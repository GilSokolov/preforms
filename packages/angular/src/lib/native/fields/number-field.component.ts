import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { InputField } from "@preforms/ts";
import { DynamicFormElement } from "@preforms/angular/core";
import { AriaAttributesDirective } from "@preforms/angular/core";
import { BaseFieldComponent } from "@preforms/angular/core";
import { FormFieldComponent } from "./form-field.component";

@DynamicFormElement({ component: "number" })
@Component({
  selector: "preforms-number",
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
        class="preforms-input"
        [readOnly]="!!field.readonly"
        [autofocus]="!!field.autofocus"
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
