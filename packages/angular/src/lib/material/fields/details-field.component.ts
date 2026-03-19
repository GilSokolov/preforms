import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { MatExpansionModule } from "@angular/material/expansion";
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
    <mat-accordion>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title> {{ field.label }} </mat-panel-title>
          <mat-panel-description>
            {{ field.description }}
          </mat-panel-description>
        </mat-expansion-panel-header>
        <preforms-dynamic-field-group
          [fields]="field.fields"
          [control]="control"
        />
      </mat-expansion-panel>
    </mat-accordion>
  `,
  imports: [MatExpansionModule, DynamicFieldGroupComponent],
})
export class DetailsFieldComponent extends BaseFieldComponent<
  FormGroup,
  DetailsField
> {}
