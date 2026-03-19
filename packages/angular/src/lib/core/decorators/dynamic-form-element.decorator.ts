import { Type } from "@angular/core";
import { DynamicFormRegistry } from "../registry";
import { DynamicFormElementConfig } from "../models/field-config.model";

export function DynamicFormElement({
  component,
  asyncValidators,
  validators,
}: DynamicFormElementConfig) {
  return function (target: Type<any>) {
    DynamicFormRegistry.register(component, () => Promise.resolve(target), {
      asyncValidators,
      validators,
    });
  };
}
