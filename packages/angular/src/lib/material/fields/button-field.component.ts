import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatButtonAppearance, MatButtonModule } from "@angular/material/button";
import { FieldButton } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";

@DynamicFormElement({ component: "button" })
@Component({
  selector: "preforms-mat-button-field",
  template: `
    <button
      [matButton]="appearance"
      [type]="field.type"
      [value]="field.value"
      [attr.name]="field.name"
      [disabled]="field.disabled"
      [attr.command]="field.command"
      [attr.commandfor]="field.commandfor"
      [attr.formaction]="field.formaction"
      [attr.formmethod]="field.formmethod"
      [class]="['preforms-form-button', field.className]"
    >
      {{ field.label }}
    </button>
  `,
  imports: [ReactiveFormsModule, MatButtonModule],
})
export class FieldButtonComponent extends BaseFieldComponent<
  FormControl,
  FieldButton
> {
  get appearance(): MatButtonAppearance {
    return (this.field.meta?.["appearance"] as MatButtonAppearance) || "filled";
  }
}
