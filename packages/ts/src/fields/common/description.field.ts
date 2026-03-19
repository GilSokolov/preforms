import { TextFieldConfigDerived } from "../base";
import { TextareaField } from "../base/textarea-field";

/**
 * Multiline text field for longer free-form input such as descriptions,
 * notes, or comments.
 *
 * This is a semantic wrapper around {@link TextareaField} with a predefined
 * field key of `"description"`.
 */
export class Description extends TextareaField {
  /**
   * @param configOrValue - Initial field value or full field configuration
   * @param required - Whether the field is required when a raw value is provided
   */
  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = false,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue, required }
        : configOrValue;

    super({
      key: "description",
      aria: { "aria-label": "Description" },
      ...config,
    });
  }
}
