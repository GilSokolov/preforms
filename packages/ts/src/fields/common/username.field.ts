import { TextField, TextFieldConfigDerived } from "../base/text-field";

/**
 * Username text field.
 *
 * A semantic wrapper around {@link TextField} that:
 * - Defaults the field key to `"userName"`
 * - Is required by default
 * - Accepts either a raw string value or a full field configuration
 *
 * @example
 * // Simple usage with a string value
 * const username = new UserName("john_doe");
 *
 * @example
 * // Full configuration usage
 * const usernameField = new UserName({
 *   value: "john_doe",
 *   required: true,
 *   placeholder: "Enter your username",
 *   aria: { "aria-label": "Username" },
 * });
 */
export class UserName extends TextField {
  /**
   * @param configOrValue - Initial username value or full field configuration
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

    super({ key: "username", aria: { "aria-label": "User Name" }, ...config });
  }
}
