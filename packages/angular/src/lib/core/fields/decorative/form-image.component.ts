import { Component } from "@angular/core";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "../base";
import { FormImage } from "@preforms/ts";

@DynamicFormElement({ component: "form-image" })
@Component({
  selector: "preforms-image-field",
  template: `
    <div class="preforms-image" [class]="field.className">
      <img
        [src]="field.src"
        [alt]="field.alt || ''"
        [attr.width]="field.width || null"
        [attr.height]="field.height || null"
        loading="lazy"
      />
    </div>
  `,
  styles: `
    .preforms-image {
      margin: 0.5rem 0 1rem;
    }

    .preforms-image img {
      max-width: 100%;
      height: auto;
      display: block;
      border-radius: var(--form-image-radius, 4px);
    }
  `,
})
export class FormImageComponent extends BaseFieldComponent<never, FormImage> {}
