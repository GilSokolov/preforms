import {
  AfterContentInit,
  Component,
  ElementRef,
  inject,
  Input,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";

import { FormField } from "@preforms/ts";

import { FieldIconComponent } from "@preforms/angular/core";

@Component({
  selector: "preforms-form-field",
  template: `
    <div [class]="['preforms-form-field', field.className]">
      @if (field.label) {
        <label class="preforms-form-field-label" [for]="field.id">
          {{ field.label }}
        </label>
      }

      @if (field.description) {
        <small class="preforms-field-description" [id]="descriptionId">
          {{ field.description }}
        </small>
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
        <small class="preforms-field-hint">
          {{ field.hint }}
        </small>
      }

      @if (error) {
        <small class="preforms-field-error" aria-live="polite">
          {{ error }}
        </small>
      }
    </div>
  `,
  imports: [FieldIconComponent],
})
export class FormFieldComponent implements AfterContentInit {
  private host = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input() field!: FormField<any>;
  @Input() control!: AbstractControl;
  @Input() error?: string;

  get descriptionId() {
    return `${this.field.id}-description`;
  }

  /** Links the projected control to the description line for assistive tech. */
  ngAfterContentInit(): void {
    if (!this.field.description) return;
    const control = this.host.nativeElement.querySelector(
      "input, select, textarea",
    );
    if (control && !control.hasAttribute("aria-describedby")) {
      control.setAttribute("aria-describedby", this.descriptionId);
    }
  }

  get leftIcons() {
    return this.field.icons?.filter((i) => i.side === "left") ?? [];
  }

  get rightIcons() {
    return this.field.icons?.filter((i) => i.side === "right") ?? [];
  }
}
