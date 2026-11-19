import { Component } from "@angular/core";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "..";
import { FormDescription } from "@preforms/ts";

@DynamicFormElement({ component: "form-description" })
@Component({
  selector: "preforms-description-field",
  template: `
    <p class="preforms-description" [class]="field.className">
      {{ field.value }}
    </p>
  `,
  styles: `
    .preforms-description {
      font-size: var(--preforms-font-size-sm, 0.85rem);
      line-height: var(--preforms-line-height, 1.4);
      color: var(--preforms-muted, color-mix(in srgb, currentColor 60%, transparent));
      margin: 0.25rem 0 var(--preforms-gap, 1rem);
    }
  `,
})
export class FormDescriptionComponent extends BaseFieldComponent<
  never,
  FormDescription
> {}
