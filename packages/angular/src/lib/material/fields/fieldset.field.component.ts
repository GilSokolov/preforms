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
    <mat-card class="example-card" appearance="outlined">
      <mat-card-header>
        <mat-card-title>{{ field.label }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <preforms-dynamic-field-group
          [fields]="field.fields"
          [control]="control"
        />
      </mat-card-content>
    </mat-card>
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent, MatCardModule],
})
export class FieldsetFieldComponent extends BaseFieldComponent<
  FormGroup,
  Fieldset
> {}
