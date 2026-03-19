import { AbstractControl, ValidatorFn } from "@angular/forms";

export function stepValidator(step: number, type?: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if ((!control.value && control.value !== 0) || type !== "number") {
      return null; // Don't validate if the control is empty
    }

    const value = Number(control.value);
    if (isNaN(value)) {
      return { step: { valid: false, message: "Value is not a number" } };
    }

    // Get the precision (number of decimal places) for both the step and value
    const stepPrecision = getDecimalPlaces(step);
    const valuePrecision = getDecimalPlaces(value);
    const precision = Math.max(stepPrecision, valuePrecision);

    // Multiply both value and step by a power of 10 to avoid floating-point issues
    const multiplier = Math.pow(10, precision);
    const normalizedValue = Math.round(value * multiplier);
    const normalizedStep = Math.round(step * multiplier);

    // Calculate the remainder in the normalized space
    const remainder = normalizedValue % normalizedStep;

    // If the remainder is 0, the value is a valid multiple of step
    return remainder === 0
      ? null
      : {
          step: {
            valid: false,
            message: `Value must be a multiple of ${step}`,
          },
        };
  };
}

// Helper function to calculate the decimal places of a number
function getDecimalPlaces(num: number): number {
  const match = ("" + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) {
    return 0;
  }
  return Math.max(
    0,
    (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0),
  );
}
