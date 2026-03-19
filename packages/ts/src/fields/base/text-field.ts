import { InputField, InputFieldConfigDerived } from "./input.field";

export interface TextFieldConfigDerived extends Omit<
  InputFieldConfigDerived<string>,
  "key"
> {
  key?: string;
}

/**
 * Generic text input field.
 *
 * A wrapper around {@link InputField} that:
 * - Defaults the input type to `"text"`
 * - Accepts either a raw string value or a full field configuration
 *
 * @template T - The type of the field value (string by default)
 *
 * @example
 * // Simple usage with just a string value
 * const firstName = new TextField("firstName", "John", true);
 *
 * @example
 * // Full configuration usage
 * const lastName = new TextField({
 *   key: "lastName",
 *   value: "Doe",
 *   required: true,
 *   placeholder: "Enter your last name",
 *   aria: { "aria-label": "Last Name" },
 * });
 */
export class TextField extends InputField<string> {
  /**
   * @param configOrKey - The field key as a string or a full field configuration object
   * @param value - Optional initial value if `configOrKey` is a string
   * @param required - Whether the field is required (defaults to false)
   */
  constructor(
    configOrKey: string | InputFieldConfigDerived<string>,
    value?: string,
    required = false,
  ) {
    const config: InputFieldConfigDerived<string> =
      typeof configOrKey === "string"
        ? { key: configOrKey, value, required }
        : configOrKey;

    super({
      ...config,
      key: config.key,
      type: "text",
    });
  }
}
