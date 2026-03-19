import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  FormArray,
} from '@angular/forms';

export function maxItemsValidator(max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control || !(control instanceof FormArray)) {
      return null; // Only validate if it's a FormArray
    }

    const length = control.length;
    return length <= max
      ? null
      : { maxItems: { required: max, actual: length } };
  };
}
