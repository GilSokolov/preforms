import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  BaseFieldComponent,
  DynamicFieldGroupComponent,
} from "../../core/fields";
import { Fieldset } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { MatCardModule } from "@angular/material/card";

@DynamicFormElement({ component: "fieldset" })
@Component({
  selector: "preforms-fieldset-field",
  template: `
    <fieldset>
      <legend>{{ field.label }}</legend>

      <preforms-dynamic-field-group
        [fields]="field.fields"
        [control]="control"
      />
    </fieldset>
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent, MatCardModule],
})
export class FieldsetFieldComponent extends BaseFieldComponent<
  FormGroup,
  Fieldset
> {}
