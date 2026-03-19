import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { DynamicFieldGroupComponent } from "../base/dynamic-field-group.component";
import { FormRow } from "@preforms/ts";
import { BaseFieldComponent } from "../base/base-field.component";
import { DynamicFormElement } from "../../decorators";

@DynamicFormElement({ component: "form-row" })
@Component({
  selector: "preforms-form-row",
  template: `
    <preforms-dynamic-field-group
      [control]="control"
      [fields]="field.fields"
      [style.display]="'flex'"
      [style.gap]="field.gap"
      [style.align-items]="'center'"
      [class]="[field.className, 'form-row']"
      [style.justify-content]="field.position"
    />
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent],
})
export class FormRowComponent extends BaseFieldComponent<FormGroup, FormRow> {}
