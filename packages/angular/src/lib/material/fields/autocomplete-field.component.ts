import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { InputField } from "@preforms/ts";

@DynamicFormElement({ component: "autocomplete" })
@Component({
  selector: "preforms-mat-autocomplete-field",
  template: `
    <mat-form-field>
      <mat-label>{{ field.label }}</mat-label>
      <input
        matInput
        [id]="field.id"
        [formControl]="control"
        [type]="field.type"
        [matAutocomplete]="auto"
      />
      <mat-autocomplete #auto="matAutocomplete">
        @for (option of field.options; track $index) {
          <mat-option [value]="option.value">
            {{ option.label }}
          </mat-option>
        }
      </mat-autocomplete>
      <mat-hint>{{ field.hint }}</mat-hint>
      <mat-error>{{ error }}</mat-error>
    </mat-form-field>
  `,
  imports: [
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class AutocompleteFieldComponent extends BaseFieldComponent<
  FormControl,
  InputField
> {}
