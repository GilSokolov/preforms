import { TextField, TextFieldConfigDerived } from "../base/text-field";

/**
 * Name text field.
 *
 * A semantic wrapper around {@link TextField} that:
 * - Represents a generic "name" value
 * - Defaults the field key to `"name"`
 * - Is required by default
 * - Accepts either a raw string value or a full field configuration
 */
export class Name extends TextField {
  /**
   * @param configOrValue - Initial name value or full field configuration
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

    super({ key: "name", aria: { "aria-label": "Name" }, ...config });
  }
}
