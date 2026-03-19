import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { TextareaField } from "@preforms/ts";

@DynamicFormElement({ component: "textarea" })
@Component({
  selector: "preforms-textarea-field",
  template: `
    <mat-form-field>
      <mat-label [attr.for]="field.key">{{ field.label }}</mat-label>
      <textarea
        matInput
        [id]="field.key"
        [attr.rows]="field.rows"
        [formControl]="control"
        [attr.placeholder]="field.placeholder"
      ></textarea>
      @if (field.hint) {
        <mat-hint>{{ field.hint }}</mat-hint>
      }
      @if (error) {
        <mat-error>{{ error }} </mat-error>
      }
    </mat-form-field>
  `,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
})
export class TextareaFieldComponent extends BaseFieldComponent<
  FormControl,
  TextareaField
> {}
