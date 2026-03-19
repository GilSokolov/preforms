import {
  AbstractControl,
  FormArray,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function minItemsValidator(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control || !(control instanceof FormArray)) {
      return null; // Only validate if it's a FormArray
    }

    const length = control.value.length;
    return length >= min
      ? null
      : { minItems: { required: min, actual: length } };
  };
}
