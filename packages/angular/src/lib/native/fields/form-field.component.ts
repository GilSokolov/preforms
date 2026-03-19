import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

import { FormField } from "@preforms/ts";

import { FieldIconComponent } from "../../core/fields";

@Component({
  selector: "preforms-form-field",
  template: `
    <div [class]="['preforms-form-field', field.className]">
      @if (field.label) {
        <label class="preforms-form-field-label" [for]="field.id">
          {{ field.label }}
        </label>
      }

      <div class="preforms-form-field-row">
        @for (icon of leftIcons; track $index) {
          <preforms-field-icon
            [icon]="icon"
            [field]="field"
            [control]="control"
          />
        }

        <ng-content></ng-content>

        @for (icon of rightIcons; track $index) {
          <preforms-field-icon
            [icon]="icon"
            [field]="field"
            [control]="control"
          />
        }
      </div>

      @if (field.hint) {
        <small class="preforms-form-field-hint">
          {{ field.hint }}
        </small>
      }

      @if (error) {
        <p class="preforms-form-field-error" aria-live="polite">
          {{ error }}
        </p>
      }
    </div>
  `,
  imports: [FieldIconComponent],
})
export class FormFieldComponent {
  @Input() field!: FormField<any>;
  @Input() control!: AbstractControl;
  @Input() error?: string;

  get leftIcons() {
    return this.field.icons?.filter((i) => i.side === "left") ?? [];
  }

  get rightIcons() {
    return this.field.icons?.filter((i) => i.side === "right") ?? [];
  }
}
