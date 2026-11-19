import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "@preforms/angular/core";
import { BaseFieldComponent, FieldIconComponent } from "@preforms/angular/core";
import { FieldButton } from "@preforms/ts";

@DynamicFormElement({ component: "button" })
@Component({
  selector: "preforms-button",
  styles: `
    .preforms-button {
      padding: var(--preforms-control-pad, 0.5rem) calc(var(--preforms-control-pad, 0.5rem) * 2);
      border: 1px solid var(--preforms-accent, AccentColor);
      border-radius: var(--preforms-radius, 0.5rem);
      background: var(--preforms-accent, AccentColor);
      color: var(--preforms-on-accent, AccentColorText);
      font: inherit;
      cursor: pointer;
    }

    .preforms-button:focus-visible {
      outline: 2px solid var(--preforms-accent, AccentColor);
      outline-offset: 2px;
    }

    .preforms-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `,
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
      [class]="['preforms-button', field.className]"
      [style]="field.style"
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
