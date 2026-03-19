import { Component, Input } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { InputField } from "@preforms/ts";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { AriaAttributesDirective } from "../../core/directives";
import { FieldIconComponent } from "../../core/fields";

@Component({
  selector: "preforms-mat-number-input",
  template: `
    <mat-form-field [class]="['preforms-form-field', field.className]">
      @if (field.label) {
        <mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
      }

      @for (icon of leftIcons; track $index) {
        <preforms-field-icon
          matPrefix
          [icon]="icon"
          [field]="field"
          [control]="control"
        />
      }

      <input
        matInput
        type="number"
        [id]="field.id"
        [pfAria]="field.aria"
        [formControl]="control"
        [attr.step]="field.step"
        [attr.placeholder]="field.placeholder"
        [attr.autocomplete]="field.autocomplete"
      />

      @for (icon of rightIcons; track $index) {
        <preforms-field-icon
          matSuffix
          [icon]="icon"
          [field]="field"
          [control]="control"
        />
      }

      @if (field.hint) {
        <mat-hint>{{ field.hint }}</mat-hint>
      }
      @if (error) {
        <mat-error>{{ error }}</mat-error>
      }
    </mat-form-field>
  `,
  imports: [
    MatInputModule,
    FieldIconComponent,
    MatFormFieldModule,
    AriaAttributesDirective,
    ReactiveFormsModule,
  ],
})
export class NumberFieldComponent {
  @Input() field!: InputField;
  @Input() control!: FormControl;
  @Input() error?: string;

  get listName() {
    return `${this.field.id}-list`;
  }

  get leftIcons() {
    return this.field.icons?.filter((i) => i.side === "left") ?? [];
  }

  get rightIcons() {
    return this.field.icons?.filter((i) => i.side === "right") ?? [];
  }
}
