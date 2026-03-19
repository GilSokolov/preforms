import { TextField, TextFieldConfigDerived } from "../base/text-field";

/**
 * State / province text field.
 *
 * A semantic wrapper around {@link TextField} that:
 * - Defaults the field key to `"state"`
 * - Is optional by default
 * - Accepts either a raw string value or a full field configuration
 */
export class State extends TextField {
  /**
   * @param configOrValue - Initial state value or full field configuration
   * @param required - Whether the field is required (defaults to false)
   */
  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = false,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue, required }
        : configOrValue;

    super({ key: "state", aria: { "aria-label": "State" }, ...config });
  }
}
