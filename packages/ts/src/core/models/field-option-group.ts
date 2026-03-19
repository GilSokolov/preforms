import { isOptionObject } from "../../utils";
import { FormFieldOptionConfig } from "../interfaces";
import { FormFieldOption } from "./field-option";

/**
 * Represents a group of FormFieldOptions.
 * Useful for `<optgroup>` in select fields or categorized checkboxes/radios.
 *
 * @template T - The type of the option values (string, number, or custom type)
 *
 * Usage:
 * ```ts
 * new FormFieldOptionGroup("Fruits", [
 *   new FormFieldOption("apple"),
 *   "banana", // primitive shortcut
 *   { value: "cherry", label: "Cherry" }
 * ]);
 * ```
 */
export class FormFieldOptionGroup<T = any> {
  /** The display label for the group */
  label: string;

  /** The options contained in this group */
  options: FormFieldOption<T>[];

  /** Whether the group is disabled */
  disabled: boolean;

  /**
   * Creates a new FormFieldOptionGroup.
   * @param label - The label for the group
   * @param options - Array of FormFieldOption objects or primitives (`string | number`) for convenience
   * @param disabled - Optional flag to disable the entire group
   */
  constructor(
    label: string,
    options: FormFieldOptionConfig<T>,
    disabled = false,
  ) {
    this.label = label;

    this.options = options.map((opt) => {
      if (opt instanceof FormFieldOption) return opt;

      if (typeof opt === "string" || typeof opt === "number") {
        return new FormFieldOption(opt);
      }

      if (isOptionObject<T>(opt)) {
        return new FormFieldOption(opt);
      }

      throw new Error(
        `Invalid option type. Must be FormFieldOption<T>, primitive, or { value: T; label: string }`,
      );
    });

    this.disabled = disabled;
  }
}
