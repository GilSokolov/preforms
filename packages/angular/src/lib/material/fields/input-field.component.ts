import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { InputField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { AriaAttributesDirective } from "../../core/directives";
import { BaseFieldComponent, FieldIconComponent } from "../../core/fields";

@DynamicFormElement({ component: "input" })
@Component({
  selector: "preforms-mat-input-field",
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
        [id]="field.id"
        [type]="field.type"
        [pfAria]="field.aria"
        [attr.step]="field.step"
        [formControl]="control"
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
export class MatInputFieldComponent extends BaseFieldComponent<
  FormControl,
  InputField
> {
  get leftIcons() {
    return this.field.icons?.filter((i) => i.side === "left");
  }

  get rightIcons() {
    return this.field.icons?.filter((i) => i.side === "right");
  }
}
