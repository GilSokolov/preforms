import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { SelectField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";

@DynamicFormElement({ component: "select" })
@Component({
  selector: "preforms-mat-select-field",
  template: `
    <mat-form-field>
      <mat-label>{{ field.label }}</mat-label>
      <mat-select
        [formControl]="control"
        [attr.multiple]="field.multiple ? 'multiple' : null"
        (selectionChange)="emit('change')"
      >
        @for (option of field.options; track option) {
          <mat-option [value]="option.value">{{ option.label }}</mat-option>
        }
      </mat-select>
      @if (field.hint) {
        <mat-hint>{{ field.hint }}</mat-hint>
      }
      @if (error) {
        <mat-error>{{ error }}</mat-error>
      }
    </mat-form-field>
  `,
  imports: [MatSelectModule, MatFormFieldModule, ReactiveFormsModule],
})
export class SelectFieldComponent extends BaseFieldComponent<
  FormControl,
  SelectField
> {}
