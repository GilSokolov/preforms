import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { DynamicFormElement } from "@preforms/angular/core";

import { DetailsField } from "@preforms/ts";
import {
  BaseFieldComponent,
  DynamicFieldGroupComponent,
} from "@preforms/angular/core";

@DynamicFormElement({ component: "details" })
@Component({
  selector: "preforms-details",
  styles: `
    details {
      border: 1px solid var(--preforms-border, color-mix(in srgb, currentColor 25%, transparent));
      border-radius: var(--preforms-radius, 0.5rem);
    }

    summary {
      padding: var(--preforms-control-pad, 0.5rem);
      color: var(--preforms-muted, color-mix(in srgb, currentColor 60%, transparent));
      cursor: pointer;
    }

    /* Raised body; the summary stays on the page background. */
    details[open] > :not(summary) {
      padding: var(--preforms-gap, 1rem);
      background: var(--preforms-surface, Canvas);
      border-radius: 0 0 var(--preforms-radius, 0.5rem) var(--preforms-radius, 0.5rem);
    }
  `,
  template: `
    <details>
      <summary>{{ field.label }}</summary>
      <div class="form-field-hint">{{ field.hint }}</div>

      <preforms-group [fields]="field.fields" [control]="control" />
    </details>
  `,
  imports: [ReactiveFormsModule, DynamicFieldGroupComponent],
})
export class DetailsFieldComponent extends BaseFieldComponent<
  FormGroup,
  DetailsField
> {}
