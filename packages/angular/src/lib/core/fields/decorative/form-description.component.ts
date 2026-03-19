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
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--form-description-color, #6b7280);
      margin: 0.25rem 0 0.75rem;
    }
  `,
})
export class FormDescriptionComponent extends BaseFieldComponent<
  never,
  FormDescription
> {}
