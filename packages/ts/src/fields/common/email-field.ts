import { TextFieldConfigDerived } from "../base";
import { InputField } from "../base/input.field";

/**
 * Email input field with built-in browser validation.
 *
 * This is a semantic wrapper around {@link InputField} that configures
 * the input type as `"email"` and defaults the field key to `"email"`.
 */
export class EmailField extends InputField<string> {
  /**
   * @param configOrValue - Initial email value or full field configuration
   * @param required - Whether the email field is required (defaults to true)
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
      key: config.key || "email",
      type: "email",
      required,
    });
  }
}
