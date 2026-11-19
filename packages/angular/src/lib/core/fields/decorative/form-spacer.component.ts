import { Component } from "@angular/core";
import { Spacer } from "@preforms/ts";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "..";

@DynamicFormElement({ component: "form-spacer" })
@Component({
  selector: "preforms-spacer",
  template: ` <div class="preforms-spacer"></div> `,
  styles: [
    `
      .preforms-spacer {
        height: var(--preforms-gap, 1rem);
      }
    `,
  ],
})
export class FormSpacerComponent extends BaseFieldComponent<
  never,
  Spacer
> {}
