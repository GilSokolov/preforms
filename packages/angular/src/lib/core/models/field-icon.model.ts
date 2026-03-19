import { Directive, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { FormFieldIcon } from "@preforms/ts";

@Directive()
export abstract class FieldIcon {
  @Input() type!: "button" | "icon";
  @Input() icon!: FormFieldIcon;
  @Input() field!: any; // your AbstractFormElement
  @Input() control!: AbstractControl;
  @Input() handler!: () => void;
  @Input() visible!: () => boolean;
}
