import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import {
  BaseFieldComponent,
  DynamicFieldGroupComponent,
} from "@preforms/angular/core";
import { Fieldset } from "@preforms/ts";
import { DynamicFormElement } from "@preforms/angular/core";

@DynamicFormElement({ component: "fieldset" })
@Component({
  selector: "preforms-fieldset",
  styles: `
    fieldset {
      margin: 0;
      padding: var(--preforms-gap, 1rem);
      border: 1px solid var(--preforms-border, color-mix(in srgb, currentColor 25%, transparent));
      border-radius: var(--preforms-radius, 0.5rem);
    }

    legend {
      color: var(--preforms-muted, color-mix(in srgb, currentColor 60%, transparent));
    }
  `,
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
