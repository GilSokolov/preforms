import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { DateField } from "@preforms/ts";

@DynamicFormElement({ component: "datepicker" })
@Component({
  selector: "preforms-mat-input-field",
  template: `
    <mat-form-field>
      <mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
      <input
        matInput
        [type]="field.type"
        [formControl]="control"
        [matDatepicker]="picker"
        [attr.placeholder]="field.placeholder"
      />
      <mat-datepicker-toggle
        matIconSuffix
        [for]="picker"
      ></mat-datepicker-toggle>

      <mat-datepicker #picker></mat-datepicker>
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
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
  ],
})
export class DatepickerFieldComponent extends BaseFieldComponent<
  FormControl,
  DateField
> {}
