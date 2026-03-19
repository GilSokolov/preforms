import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { CheckboxField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";

@DynamicFormElement({ component: "checkbox" })
@Component({
  selector: "preforms-checkbox-input",
  template: `
    <label [class]="field.className">
      <input type="checkbox" [formControl]="control" />
      <span class="label-text">{{ field.label }}</span>
      <span class="description">{{ field.description }}</span>
    </label>
  `,
  imports: [ReactiveFormsModule],
})
export class CheckboxComponent extends BaseFieldComponent<
  FormControl,
  CheckboxField<boolean>
> {}
