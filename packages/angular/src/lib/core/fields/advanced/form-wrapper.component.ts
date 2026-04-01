import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { DynamicFieldGroupComponent } from "../base/dynamic-field-group.component";
import { FieldWrapper } from "@preforms/ts";
import { BaseFieldComponent } from "../base/base-field.component";
import { DynamicFormElement } from "../../decorators";

@DynamicFormElement({ component: "wrapper" })
@Component({
  selector: "preforms-wrapper",
  template: `
    <preforms-dynamic-field-group
      [control]="control"
      [fields]="field.fields"
      [class]="[field.className, 'wrapper']"
    />
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent],
})
export class FieldWrapperComponent extends BaseFieldComponent<
  FormGroup,
  FieldWrapper
> {}
