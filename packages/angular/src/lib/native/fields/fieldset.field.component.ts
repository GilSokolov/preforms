import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  BaseFieldComponent,
  DynamicFieldGroupComponent,
} from "../../core/fields";
import { Fieldset } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";

@DynamicFormElement({ component: "fieldset" })
@Component({
  selector: "preforms-fieldset",
  template: `
    <fieldset>
      <legend>{{ field.label }}</legend>

      <preforms-group [fields]="field.fields" [control]="control" />
    </fieldset>
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent],
})
export class FieldsetFieldComponent extends BaseFieldComponent<
  FormGroup,
  Fieldset
> {}
