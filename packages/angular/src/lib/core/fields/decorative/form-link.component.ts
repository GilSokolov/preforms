import { Component } from "@angular/core";
import { LinkField } from "@preforms/ts";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent, FieldIconComponent } from "..";

@DynamicFormElement({ component: "form-link" })
@Component({
  selector: "preforms-link-field",
  template: `
    <a
      [href]="field.href"
      [attr.target]="field.target"
      [attr.rel]="field.rel"
      [class]="['preforms-link', field.className]"
      [style]="field.style"
    >
      @for (icon of leftIcons; track $index) {
        <preforms-field-icon [icon]="icon" [field]="field" [control]="control" />
      }
      {{ field.label }}
      @for (icon of rightIcons; track $index) {
        <preforms-field-icon [icon]="icon" [field]="field" [control]="control" />
      }
    </a>
  `,
  imports: [FieldIconComponent],
})
export class FormLinkComponent extends BaseFieldComponent<never, LinkField> {
  get leftIcons() {
    return this.field.icons?.filter((i) => i.side === "left") ?? [];
  }

  get rightIcons() {
    return this.field.icons?.filter((i) => i.side === "right") ?? [];
  }
}
