import { AbstractControl, ValidatorFn } from "@angular/forms";
import { PatternRule } from "@preforms/ts";

export function buildPatternValidators(
  patterns?: PatternRule[],
): ValidatorFn[] {
  if (!patterns) return [];

  return patterns.map((pattern) => {
    return (control: AbstractControl) => {
      if (!control.value) return null; // skip empty values
      if (pattern.rule.test(control.value)) return null;
      return { pattern: { message: pattern.message } };
    };
  });
}
