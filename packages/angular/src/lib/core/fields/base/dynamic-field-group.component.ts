import { Component, Input } from "@angular/core";
import {
  AbstractControl,
  FormGroup,
  ReactiveFormsModule,
} from "@angular/forms";
import { FormElement } from "@preforms/ts";
import { DynamicFieldComponent } from "../../dynamic-field.component";

@Component({
  selector: "preforms-dynamic-field-group",
  template: `
    @for (field of fields; track field.id) {
      <div [hidden]="field.hidden" [class]="className">
        <preforms-dynamic-field [field]="field" [control]="getControl(field)" />
      </div>
    }
  `,
  imports: [ReactiveFormsModule, DynamicFieldComponent],
})
export class DynamicFieldGroupComponent {
  @Input() className = "";
  @Input() fields: FormElement[] = [];
  @Input() control!: FormGroup;

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
