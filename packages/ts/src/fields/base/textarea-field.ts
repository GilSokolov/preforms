import { FormField } from "../../core";
import { InputFieldConfigDerived } from "./input.field";

/**
 * Multi-line text input field (textarea).
 *
 * A wrapper around {@link FormField} that:
 * - Defaults `component` to `"textarea"` for multi-line text entry
 * - Uses `"text"` as the input type
 * - Accepts either a raw string value or a full field configuration
 *
 * @example
 * // Simple usage with just a string value
 * const bio = new TextareaField("bio", "This is my bio.", true);
 *
 * @example
 * // Full configuration usage
 * const description = new TextareaField({
 *   key: "description",
 *   value: "Enter a detailed description",
 *   required: true,
 *   placeholder: "Type your description here",
 *   rows: 5,
 *   aria: { "aria-label": "Description" },
 * });
 *
 * @template T - The type of the field value (string by default)
 */
export class TextareaField extends FormField<string> {
  /**
   * @param configOrKey - The field key as a string or a full field configuration object
   * @param value - Optional initial value if `configOrKey` is a string
   * @param required - Whether the field is required (defaults to false)
   */
  constructor(
    configOrKey: string | InputFieldConfigDerived<string>,
    value?: string,
    required = false,
  ) {
    const config: InputFieldConfigDerived<string> =
      typeof configOrKey === "string"
        ? { key: configOrKey, value, required }
        : configOrKey;

    super({
      ...config,
      key: config.key,
      component: "textarea",
      type: "text",
    });
  }
}
