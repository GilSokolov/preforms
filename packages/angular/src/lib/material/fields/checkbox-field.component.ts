import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";

@DynamicFormElement({ component: "checkbox" })
@Component({
  selector: "preforms-mat-checkbox-field",
  template: `
    <mat-checkbox [formControl]="control">{{ field.label }}</mat-checkbox>

    @if (field.hint) {
      <mat-hint>{{ field.hint }}</mat-hint>
    }
    @if (error) {
      <mat-error>{{ error }}</mat-error>
    }
  `,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatCheckboxModule],
})
export class CheckboxFieldComponent extends BaseFieldComponent<FormControl> {}
