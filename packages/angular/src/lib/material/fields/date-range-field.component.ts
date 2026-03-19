import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { DateField, DateRangeField } from "@preforms/ts";
import { MatInputModule } from "@angular/material/input";

@DynamicFormElement({ component: "date-range" })
@Component({
  selector: "preforms-mat-date-range-field",
  template: `
    <mat-form-field>
      <mat-label [attr.for]="fields[0].id">{{ field.label }}</mat-label>

      <mat-date-range-input
        [id]="field.key"
        [formGroup]="control"
        [rangePicker]="picker"
      >
        <input
          matStartDate
          [id]="fields[0].id"
          [name]="fields[0].name"
          [formControlName]="fields[0].key"
          [attr.placeholder]="fields[0].placeholder"
        />

        <input
          matEndDate
          [id]="fields[1].id"
          [name]="fields[1].name"
          [formControlName]="fields[1].key"
          [attr.placeholder]="fields[1].placeholder"
        />
      </mat-date-range-input>

      <mat-datepicker-toggle matIconSuffix [for]="picker" />
      <mat-date-range-picker [touchUi]="isMobile" #picker />

      @if (field.hint) {
        <mat-hint>{{ field.hint }}</mat-hint>
      }
      @if (error) {
        <mat-error>{{ error }}</mat-error>
      }
    </mat-form-field>
  `,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
  ],
})
export class DateRangeFieldComponent extends BaseFieldComponent<
  FormGroup,
  DateRangeField
> {
  get isMobile() {
    return window.innerWidth < 641;
  }

  get fields() {
    return this.field.fields as [DateField, DateField];
  }
}
