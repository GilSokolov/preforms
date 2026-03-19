import { Type } from "@angular/core";
import { ValidatorFn, AsyncValidatorFn } from "@angular/forms";

export type DynamicFieldLoader = () => Promise<Type<any>>;

/**
 * Represents a lazy-loadable form field.
 * Use `provideDynamicFormLazyFields` to register these with DI.
 */
export interface DynamicFormField {
  type: string;
  loader: DynamicFieldLoader;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
}

export interface ResolvedDynamicFormField {
  type: string;
  component: Type<any> | null;
  validators?: ValidatorFn[];
  asyncValidators?: AsyncValidatorFn[];
}
