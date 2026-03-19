import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "../../decorators";
import { DynamicFieldGroupComponent } from "../base/dynamic-field-group.component";
import { BaseFieldComponent } from "../base/base-field.component";

import { FieldGroup } from "@preforms/ts";

@DynamicFormElement({ component: "group" })
@Component({
  selector: "preforms-form-group",
  template: `
    <preforms-dynamic-field-group [fields]="field.fields" [control]="control" />
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent],
})
export class FormGroupComponent extends BaseFieldComponent<
  FormGroup,
  FieldGroup
> {}
