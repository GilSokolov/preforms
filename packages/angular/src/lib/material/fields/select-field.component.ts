import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { isOptionGroup, SelectField } from "@preforms/ts";
import { DynamicFormElement, BaseFieldComponent } from "@preforms/angular/core";

@DynamicFormElement({ component: "select" })
@Component({
  selector: "preforms-mat-select",
  template: `
    <mat-form-field>
      <mat-label>{{ field.label }}</mat-label>
      <mat-select
        [formControl]="control"
        [multiple]="!!field.multiple"
        (selectionChange)="emit('change')"
      >
        @for (item of field.options; track $index) {
          @if (isOptionGroup(item)) {
            <mat-optgroup [label]="item.label" [disabled]="item.disabled">
              @for (option of item.options; track $index) {
                <mat-option [value]="option.value">{{ option.label }}</mat-option>
              }
            </mat-optgroup>
          } @else {
            <mat-option [value]="item.value">{{ item.label }}</mat-option>
          }
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
> {
  isOptionGroup = isOptionGroup;
}
