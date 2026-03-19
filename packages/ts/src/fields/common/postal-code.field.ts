import { TextField, TextFieldConfigDerived } from "../base/text-field";

/**
 * Postal code / ZIP code text field.
 *
 * A semantic wrapper around {@link TextField} that:
 * - Defaults the field key to `"postalCode"`
 * - Is required by default
 * - Accepts either a raw string value or a full field configuration
 */
export class PostalCode extends TextField {
  /**
   * @param configOrValue - Initial postal code value or full field configuration
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

    super({
      key: "postalCode",
      aria: { "aria-label": "Postal Code" },
      ...config,
    });
  }
}
