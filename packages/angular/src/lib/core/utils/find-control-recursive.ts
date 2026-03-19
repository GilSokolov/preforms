import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from "@angular/forms";
import { FormElement } from "@preforms/ts";

export function findControlRecursive(
  control: AbstractControl,
  key: string,
): AbstractControl | null {
  if (control instanceof FormGroup) {
    // Direct hit
    if (control.get(key)) {
      const found = control.get(key);

      return found as FormControl;
    }

    // Search nested groups
    for (const innerKey of Object.keys(control.controls)) {
      const innerControl = control.controls[innerKey];
      const found = findControlRecursive(innerControl, key);
      if (found) return found;
    }
  } else if (control instanceof FormArray) {
    // Search each control in the array
    for (const innerControl of control.controls) {
      const found = findControlRecursive(innerControl, key);
      if (found) return found;
    }
  }

  // Not found
  return null;
}

// export function findFieldRecursive(
//   fields: FormElement[],
//   name: string,
// ): FormElement | null {
//   const field = fields.find((field) => field.name === name);

//   if (field) return field;

//   // Search nested groups
//   for (const innerField of fields) {
//     if (
//       innerField.kind === "array" ||
//       innerField.kind === "group" ||
//       innerField.kind === "wrapper"
//     ) {
//       const found = findFieldRecursive(innerField.fields, name);
//       if (found) return found;
//     }
//   }

//   // Not found
//   return null;
// }

export function findFieldRecursive(
  fields: FormElement[],
  name: string,
): FormElement | null {
  if (fields instanceof Array) {
    const field = fields.find((field) => field.name === name);

    // Direct hit
    if (field) return field;

    // Search nested groups
    for (const innerField of fields) {
      if (
        innerField.kind === "array" ||
        innerField.kind === "group" ||
        innerField.kind === "wrapper"
      ) {
        const found = findFieldRecursive(innerField.fields, name);
        if (found) return found;
      }
    }
  }

  // Not found
  return null;
}
