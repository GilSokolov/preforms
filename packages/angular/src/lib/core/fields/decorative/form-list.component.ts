import { Component } from "@angular/core";
import { List } from "@preforms/ts";
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
      font-size: var(--preforms-font-size-sm, 0.85rem);
      line-height: var(--preforms-line-height, 1.4);
      color: var(--preforms-muted, color-mix(in srgb, currentColor 60%, transparent));
      margin: 0.25rem 0 var(--preforms-gap, 1rem);
    }
  `,
})
export class FormListComponent extends BaseFieldComponent<never, List> {}
