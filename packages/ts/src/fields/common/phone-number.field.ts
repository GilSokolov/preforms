import { InputField, TextFieldConfigDerived } from "../base";

/**
 * Phone number input field.
 *
 * A semantic wrapper around {@link InputField} that:
 * - Sets the field key to `"phoneNumber"`
 * - Uses input type `"tel"` for phone number entry
 * - Defaults `component` to `"input"`
 * - Is required by default
 * - Accepts either a raw string value or a full field configuration
 */
export class PhoneNumber extends InputField<string> {
  /**
   * @param configOrValue - Initial phone number value or full field configuration
   * @param required - Whether the field is required (defaults to true)
   */
  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = true,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue, required }
        : configOrValue;

    super({ key: "phoneNumber", type: "tel", ...config });
  }
}
