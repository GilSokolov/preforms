import { FormField } from "../../core";
import { InputField, InputFieldConfigDerived } from "./input.field";

/**
 * Input field specifically for numeric values.
 *
 * Extends `InputField<number>` and enforces `type = "number"`.
 * Provides standard field properties such as `key`, `label`, `value`, `required`, and more.
 *
 * @example
 * // Using key string
 * const ageField = new NumberField("age", 30, true);
 *
 * // Using full configuration
 * const priceField = new NumberField({
 *   key: "price",
 *   label: "Price",
 *   value: 100,
 *   required: true,
 *   min: 0,
 *   max: 1000,
 * });
 */
export class NumberField extends FormField<number> {
  /**
   * Constructs a new `NumberField`.
   *
   * @param configOrKey - Either the field key as a string, or a full configuration object.
   * @param value - Optional initial value (used when the first argument is a key string).
   * @param required - Optional boolean to mark the field as required (default: false).
   */
  constructor(
    configOrKey: string | InputFieldConfigDerived<number>,
    value?: number,
    required = false,
  ) {
    const config: InputFieldConfigDerived<number> =
      typeof configOrKey === "string"
        ? { key: configOrKey, value, required }
        : configOrKey;

    super({
      ...config,
      key: config.key,
      type: "number",
      component: "number",
    });
  }
}
