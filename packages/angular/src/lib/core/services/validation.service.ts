import { Injectable } from "@angular/core";
import { AbstractControl, ValidatorFn, Validators } from "@angular/forms";
import {
  CrossFieldValidation,
  evaluateComparison,
  FieldArray,
  FieldKind,
  FormElement,
  FormField,
} from "@preforms/ts";
import {
  arrayAggregateValidator,
  maxItemsValidator,
  minItemsValidator,
  requiredArrayValidator,
  stepValidator,
} from "../validators";
import { buildPatternValidators } from "../validators/pattern.validator";

@Injectable({ providedIn: "root" })
export class FormValidationService {
  getValidators(field: Partial<FormField>): ValidatorFn[] {
    const v: ValidatorFn[] = [];

    if (typeof field.max === "number") v.push(Validators.max(field.max));
    if (typeof field.min === "number") v.push(Validators.min(field.min));
    if (field.required) v.push(Validators.required);
    if (field.pattern) v.push(...buildPatternValidators(field.pattern));
    if (field.maxLength) v.push(Validators.maxLength(field.maxLength));
    if (field.minLength) v.push(Validators.minLength(field.minLength));
    // if (field.requiredTrue) v.push(Validators.requiredTrue);
    if (field.type === "email") v.push(Validators.email);
    if (typeof field.step === "number")
      v.push(stepValidator(field.step, field.type));

    return v;
  }

  validate(
    control: AbstractControl,
    validation: CrossFieldValidation,
    value: unknown,
  ) {
    const {
      operator,
      message = "Validation failed",
      errorKey = "crossField",
    } = validation;

    const isValid = evaluateComparison(operator, control.value, value);

    if (!isValid) {
      control.setErrors({
        ...control.errors,
        [errorKey]: { message },
      });
    } else {
      const { [errorKey]: crossField, ...rest } = control.errors ?? {};
      control.setErrors(Object.keys(rest).length ? rest : null);
    }
  }

  getArrayValidators(field: Partial<FieldArray>): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    if (field.required) validators.push(requiredArrayValidator());
    if (typeof field.minItems === "number")
      validators.push(minItemsValidator(field.minItems));
    if (typeof field.maxItems === "number")
      validators.push(maxItemsValidator(field.maxItems));

    if (field.aggregates?.length) {
      validators.push(arrayAggregateValidator(field.aggregates));
    }

    return validators;
  }

  setValidators(
    control: AbstractControl,
    kind: FieldKind,
    state: Partial<FormElement>,
  ) {
    if (kind === "array") {
      control.setValidators(this.getArrayValidators(state as FieldArray));
    }

    if (kind === "field") {
      control.setValidators(this.getValidators(state as FormField));
    }
  }
}
