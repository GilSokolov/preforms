import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { InputField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";

@DynamicFormElement({ component: "toggle" })
@Component({
  selector: "preforms-mat-toggle-field",
  template: `
    <mat-slide-toggle
      [id]="field.id"
      [formControl]="control"
      (change)="emit('change')"
      >{{ field.label }}</mat-slide-toggle
    >

    @if (field.hint) {
      <mat-hint>{{ field.hint }}</mat-hint>
    }
    @if (error) {
      <mat-error>{{ error }}</mat-error>
    }
  `,

  imports: [ReactiveFormsModule, MatFormFieldModule, MatSlideToggleModule],
})
export class ToggleFieldComponent extends BaseFieldComponent<
  FormControl,
  InputField
> {}
