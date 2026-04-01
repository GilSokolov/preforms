import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { DynamicFieldGroupComponent } from "../base/dynamic-field-group.component";
import { FormGrid } from "@preforms/ts";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "../base/base-field.component";

@DynamicFormElement({ component: "form-grid" })
@Component({
  selector: "preforms-form-grid",
  template: `
    <preforms-dynamic-field-group
      class="form-grid"
      [style.display]="'grid'"
      [style.gridTemplateColumns]="field.columns"
      [style.gridTemplateRows]="field.rows"
      [style.gap]="field.gap"
      [fields]="field.fields"
      [control]="control"
    />
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent],
})
export class FormGridComponent extends BaseFieldComponent<
  FormGroup,
  FormGrid
> {}
