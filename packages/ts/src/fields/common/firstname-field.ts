import { TextField, TextFieldConfigDerived } from "../base/text-field";

/**
 * First name text field.
 *
 * A semantic wrapper around {@link TextField} that:
 * - Defaults the field key to `"firstName"`
 * - Is required by default
 * - Accepts either a raw string value or a full field configuration
 */
export class FirstName extends TextField {
  /**
   * @param configOrValue - Initial first name value or full field configuration
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
      key: "firstName",
      aria: { "aria-label": "First Name" },
      ...config,
    });
  }
}
