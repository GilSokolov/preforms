import { TextFieldConfigDerived } from "../base";
import { InputField } from "../base/input.field";

/**
 * Password input field.
 *
 * A semantic wrapper around {@link InputField} that:
 * - Renders a password input (`type="password"`)
 * - Defaults the field key to `"password"`
 * - Is required by default
 * - Accepts either a raw string value or a full field configuration
 */
export class PasswordField extends InputField<string> {
  /**
   * @param configOrValue - Initial password value or full field configuration
   * @param required - Whether the field is required (defaults to true)
   */
  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = true,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue }
        : configOrValue;

    super({
      ...config,
      key: config.key || "password",
      type: "password",
      required,
    });
  }
}
