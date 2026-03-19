import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { TextareaField } from "@preforms/ts";
import { CommonModule } from "@angular/common";
import { FormFieldComponent } from "./form-field.component";

@DynamicFormElement({ component: "textarea" })
@Component({
  selector: "preforms-input-field",
  template: `
    <preforms-form-field [field]="field" [control]="control" [error]="error">
      <textarea
        [id]="field.id"
        [attr.name]="field.name"
        [attr.rows]="field.rows"
        [attr.cols]="field.cols"
        [attr.wrap]="field.wrap"
        [formControl]="control"
        [readonly]="field.readonly"
        class="preforms-input-field"
        [autofocus]="field.autofocus"
        [spellcheck]="field.spellcheck"
        [attr.placeholder]="field.placeholder"
        [attr.autocapitalize]="field.autocapitalize"
      >
      </textarea>
    </preforms-form-field>
  `,
  imports: [ReactiveFormsModule, CommonModule, FormFieldComponent],
})
export class TextareaFieldComponent extends BaseFieldComponent<
  FormControl,
  TextareaField
> {}
