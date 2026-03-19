import { AbstractControl, FormGroup } from "@angular/forms";
import { FieldArray, FormField } from "@preforms/ts";

export interface FormBuildResult {
  group: FormGroup;
  index: Map<string, AbstractControl>;
  fields: (FieldArray | FormField)[];
}
