import { FieldWrapper, FieldWrapperConfig, FormElement } from "../../core";

/**
 * Represents a semantic group of fields within a form.
 *
 * Extends `FormFieldGroup<T>` to allow nesting multiple fields under
 * a single logical group. This is typically used to create a `<fieldset>`-like
 * structure in forms, which can include labels, legends, and conditional logic.
 *
 * @example
 * const billingAddress = new Fieldset({
 *   fields: [
 *     new Street(),
 *     new City(),
 *     new State(),
 *     new PostalCode(),
 *     new Country(),
 *   ],
 * });
 *
 * @typeparam T - The shape of the grouped value object.
 */
export class Fieldset<T = unknown> extends FieldWrapper<T> {
  // 🔹 overload signatures
  constructor(label: string, fields: FormElement[]);
  constructor(config: FieldWrapperConfig<T>);

  // 🔹 implementation
  constructor(
    labelOrConfig: string | FieldWrapperConfig<T>,
    fields?: FormElement[],
  ) {
    const config =
      typeof labelOrConfig === "string"
        ? { label: labelOrConfig, fields }
        : labelOrConfig;

    if (!config.fields) {
      throw new Error("Missing fields");
    }

    super({ ...config, component: "fieldset", fields: config.fields });
  }
}
