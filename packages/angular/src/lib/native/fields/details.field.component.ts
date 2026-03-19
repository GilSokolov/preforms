import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { DynamicFormElement } from "../../core/decorators";

import { DetailsField } from "@preforms/ts";
import {
  BaseFieldComponent,
  DynamicFieldGroupComponent,
} from "../../core/fields";

@DynamicFormElement({ component: "details" })
@Component({
  selector: "preforms-details-field",
  template: `
    <details>
      <summary>{{ field.label }}</summary>
      <div class="form-field-hint">{{ field.hint }}</div>

      <preforms-dynamic-field-group
        [fields]="field.fields"
        [control]="control"
      />
    </details>
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent],
})
export class DetailsFieldComponent extends BaseFieldComponent<
  FormGroup,
  DetailsField
> {}
