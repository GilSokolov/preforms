import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent, FieldIconComponent } from "../../core/fields";
import { FieldButton } from "@preforms/ts";

@DynamicFormElement({ component: "button" })
@Component({
  selector: "preforms-button-field",
  template: `
    <button
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
      @for (icon of leftIcons; track $index) {
        <preforms-field-icon
          [icon]="icon"
          [field]="field"
          [control]="control"
        />
      }
      {{ field.label }}

      @for (icon of rightIcons; track $index) {
        <preforms-field-icon
          [icon]="icon"
          [field]="field"
          [control]="control"
        />
      }
    </button>
  `,
  imports: [ReactiveFormsModule, FieldIconComponent],
})
export class FieldButtonComponent extends BaseFieldComponent<
  FormControl,
  FieldButton
> {
  get leftIcons() {
    return this.field.icons?.filter((i) => i.side === "left") ?? [];
  }

  get rightIcons() {
    return this.field.icons?.filter((i) => i.side === "right") ?? [];
  }
}
