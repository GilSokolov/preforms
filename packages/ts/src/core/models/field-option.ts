import { toTitleCase } from "../../utils";

/**
 * Represents a single option in a form field (select, radio, checkbox, autocomplete, etc.).
 *
 * @template T - The type of the option value. Can be a primitive or custom type.
 *
 * Usage examples:
 * ```ts
 * // Primitive string
 * new FormFieldOption("apple");
 *
 * // Primitive number
 * new FormFieldOption(1);
 *
 * // Custom type (object)
 * new FormFieldOption({ value: { id: 1, name: "One" }, label: "One" });
 * ```
 */
export class FormFieldOption<T = any> {
  /** The actual value of the option, used for form submission */
  value: T;

  /** The display label shown in the UI */
  label: string;

  description?: string;

  selected?: boolean;

  /**
   * Creates a new FormFieldOption.
   * @param valueOrConfig - Either a primitive value (`string | number`) or an object with `{ value, label }` for custom types
   * @param label - Optional label for primitive values
   */
  constructor(
    valueOrConfig:
      | T
      | {
          value: T;
          label: string;
          description?: string;
          selected?: boolean;
        },
    label?: string,
  ) {
    if (
      typeof valueOrConfig === "object" &&
      valueOrConfig !== null &&
      "value" in valueOrConfig &&
      "label" in valueOrConfig
    ) {
      this.value = valueOrConfig.value;
      this.label = valueOrConfig.label;
      this.description = valueOrConfig.description;
      this.selected = valueOrConfig.selected;
    } else {
      // Only primitive values reach here
      this.value = valueOrConfig as T;
      this.label = label ?? toTitleCase(String(valueOrConfig));
    }
  }
}
