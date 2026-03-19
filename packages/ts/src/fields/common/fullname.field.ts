import { TextField, TextFieldConfigDerived } from "../base/text-field";

/**
 * Full name text field.
 *
 * A semantic wrapper around {@link TextField} that:
 * - Defaults the field key to `"fullName"`
 * - Is required by default
 * - Accepts either a raw string value or a full field configuration
 */
export class FullName extends TextField {
  /**
   * @param configOrValue - Initial full name value or full field configuration
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

    super({ key: "fullName", aria: { "aria-label": "Full Name" }, ...config });
  }
}
