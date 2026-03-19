import { ValidatorFn, AsyncValidatorFn } from "@angular/forms";

export interface DynamicFormElementConfig {
  component: string;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
}
