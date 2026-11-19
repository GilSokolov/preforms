import { Component } from "@angular/core";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "..";
import { Divider } from "@preforms/ts";

@DynamicFormElement({ component: "form-divider" })
@Component({
  selector: "preforms-divider-field",
  template: `
    <div
      [class]="[field.className, 'form-divider']"
      role="separator"
      [style.gap]="field.label ? '0.75rem' : ''"
    >
      @if (field.label) {
        <span class="form-divider__label">
          {{ field.label }}
        </span>
      }
    </div>
  `,
  styles: `
    .form-divider {
      display: flex;
      align-items: center;
      width: 100%;

      &::before,
      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--preforms-border, color-mix(in srgb, currentColor 25%, transparent));
      }

      .form-divider__label {
        font-size: var(--preforms-font-size-sm, 0.85rem);
        color: var(--preforms-muted, color-mix(in srgb, currentColor 60%, transparent));
        white-space: nowrap;
      }
    }
  `,
})
export class FormDividerComponent extends BaseFieldComponent<
  never,
  Divider
> {}
