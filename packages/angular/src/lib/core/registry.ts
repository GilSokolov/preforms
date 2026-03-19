import { ValidatorFn, AsyncValidatorFn } from "@angular/forms";
import { DynamicFieldLoader, DynamicFormField } from "./models";

export class DynamicFormRegistry {
  private static registry = new Map<string, DynamicFormField>();

  static register(
    type: string,
    loader: DynamicFieldLoader,
    options: {
      validators?: ValidatorFn[];
      asyncValidators?: AsyncValidatorFn[];
    } = {},
  ) {
    if (this.registry.has(type)) {
      console.warn(
        `DynamicFormField '${type}' is already registered. Overwriting.`,
      );
    }

    this.registry.set(type, { type, loader, ...options });
  }

  static resolve(type: string): DynamicFormField | undefined {
    return this.registry.get(type);
  }

  static clear() {
    this.registry.clear();
  }

  static list(): DynamicFormField[] {
    return Array.from(this.registry.values());
  }
}
