import { Component } from "@angular/core";
import { FormList } from "@preforms/ts";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "..";

@DynamicFormElement({ component: "form-list" })
@Component({
  selector: "preforms-form-list",
  template: `
    <ul class="preforms-form-list">
      @for (item of field.options; track $index) {
        <li>{{ item }}</li>
      }
    </ul>
  `,
  styles: `
    .preforms-form-list {
      font-size: 0.875rem;
      line-height: 1.5;
      color: var(--form-description-color, #6b7280);
      margin: 0.25rem 0 0.75rem;
    }
  `,
})
export class FormListComponent extends BaseFieldComponent<never, FormList> {}
