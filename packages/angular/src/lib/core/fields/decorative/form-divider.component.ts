import { Component } from "@angular/core";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "..";
import { FormDivider } from "@preforms/ts";

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
      // gap: 0.75rem;
      width: 100%;

      &::before,
      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--divider-color, #e5e7eb);
      }

      &__label {
        font-size: 0.875rem;
        color: var(--divider-label-color, #6b7280);
        white-space: nowrap;
      }
    }
  `,
})
export class FormDividerComponent extends BaseFieldComponent<
  never,
  FormDivider
> {}
