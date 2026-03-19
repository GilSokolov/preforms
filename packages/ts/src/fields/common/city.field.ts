import { TextField, TextFieldConfigDerived } from "../base/text-field";

/**
 * A text field representing a city name.
 *
 * Extends `TextField` and enforces:
 * - `key = "city"`
 * - A default `required` value of `true`
 *
 * This is a convenience field commonly used as part of an address form.
 *
 * @example
 * // Simple usage with an initial value
 * const city = new City("Berlin");
 *
 * // Full configuration
 * const city = new City({
 *   value: "Paris",
 *   label: "City",
 *   required: false,
 * });
 *
 * @remarks
 * The value is always a string and is typically used within
 * an `Address` or `FormFieldGroup`.
 */
export class City extends TextField {
  /**
   * Constructs a new `City` field.
   *
   * @param configOrValue - Either a string representing the city name,
   *                        or a full field configuration object.
   * @param required - Whether the field is required (default: true).
   */
  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = true,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue, required }
        : configOrValue;

    super({ key: "city", aria: { "aria-label": "City" }, ...config });
  }
}
