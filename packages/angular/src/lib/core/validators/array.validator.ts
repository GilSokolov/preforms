import {
  AbstractControl,
  FormArray,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

export const requiredArrayValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!(control instanceof FormArray)) return null;
    return control.length > 0 ? null : { required: true };
  };
};

export const minItemsValidator = (min: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!(control instanceof FormArray)) return null;
    return control.length >= min
      ? null
      : { min: { requiredLength: min, actualLength: control.length } };
  };
};

export const maxItemsValidator = (max: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!(control instanceof FormArray)) return null;

    return control.length <= max
      ? null
      : { max: { requiredLength: max, actualLength: control.length } };
  };
};

export function buildUniqueByErrorMessage(
  fieldNames: string[] | string,
  message?: string,
): string {
  const fields = Array.isArray(fieldNames) ? fieldNames.join(", ") : fieldNames;
  return message || `${fields} must be unique`;
}

export function uniqueByValidator(
  fieldKeys: string[] | string,
  message?: string,
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!(control instanceof FormArray)) return null;

    const seen = new Set<string>();
    const duplicates: string[] = [];

    for (const group of control.controls) {
      const key = Array.isArray(fieldKeys)
        ? fieldKeys.map((k) => (group.value as any)[k]).join("|")
        : (group.value as any)[fieldKeys];

      if (seen.has(key)) duplicates.push(key);
      else seen.add(key);
    }

    if (duplicates.length) {
      return {
        uniqueBy: {
          fields: fieldKeys,
          duplicates,
          message: buildUniqueByErrorMessage(fieldKeys, message),
        },
      };
    }

    return null;
  };
}
