import { Component, Input, ViewEncapsulation } from "@angular/core";
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { FormElement } from "@preforms/ts";
import { DynamicFieldComponent } from "../../dynamic-field.component";

@Component({
  selector: "preforms-group",
  host: { "[class.preforms-row-layout]": "rowLayout" },
  // Row sizing crosses the dynamically created renderer hosts. Every rule is
  // scoped to this explicit layout class so ordinary groups are unaffected.
  encapsulation: ViewEncapsulation.None,
  styleUrl: "./dynamic-field-group.component.css",
  template: `
    @for (field of fields; track field) {
      <div
        [hidden]="field.hidden"
        [class]="rowLayout ? [className, field.className] : className"
        [class.preforms-row-item]="rowLayout"
        [attr.data-preforms-row-size]="rowLayout ? rowSize(field) : null"
      >
        <preforms-field [field]="field" [control]="getControl(field)" />
      </div>
    }
  `,
  imports: [ReactiveFormsModule, DynamicFieldComponent],
})
export class DynamicFieldGroupComponent {
  @Input() className = "";
  @Input() rowLayout = false;
  @Input() fields: FormElement[] = [];
  @Input() control!: FormGroup;

  rowSize(field: FormElement): "compact" | "select" | "grow" {
    if (
      field.kind === "button" ||
      ["button", "checkbox", "toggle"].includes(field.component)
    ) {
      return "compact";
    }
    return field.component === "select" ? "select" : "grow";
  }

  getControl(field: FormElement): AbstractControl {
    if ("key" in field && field.key) {
      const ctrl = this.control.get(field.key);
      if (!ctrl) {
        throw new Error(`Missing control for key: ${field.key}`);
      }

      return ctrl;
    }

    return this.control;
  }
}
