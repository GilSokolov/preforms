import { Component } from "@angular/core";
import { FormSpacer } from "@preforms/ts";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "..";

@DynamicFormElement({ component: "form-spacer" })
@Component({
  selector: "preforms-spacer",
  template: ` <div class="preforms-spacer"></div> `,
  styles: [
    `
      .preforms-spacer {
        height: 1rem;
      }
    `,
  ],
})
export class FormSpacerComponent extends BaseFieldComponent<
  never,
  FormSpacer
> {}
