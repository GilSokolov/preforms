import { FormFieldOption, FormFieldOptionConfig } from "../core";
import { FormFieldOptionGroup } from "../core/models/field-option-group";

/**
 * Type guard to check if an option is a FormFieldOptionGroup.
 *
 * @param option - The option to check
 * @returns true if the option is a group
 */
export function isOptionGroup<T>(
  option: FormFieldOption<T> | FormFieldOptionGroup<T> | T,
): option is FormFieldOptionGroup<T> {
  return (option as FormFieldOptionGroup<T>).options !== undefined;
}

/**
 * Normalizes a list of options into `FormFieldOption` or `FormFieldOptionGroup` objects.
 *
 * This utility allows developers to pass options in multiple convenient forms:
 * - Raw strings or numbers (automatically converted to `FormFieldOption` with auto-generated labels)
 * - Pre-constructed `FormFieldOption` objects
 * - Pre-constructed `FormFieldOptionGroup` objects
 *
 * @template T - The type of the option values (string or number)
 *
 * @param options - Array of options, which can be:
 *   - `string[]` or `number[]` → converted into `FormFieldOption<T>`
 *   - `FormFieldOption<T>[]` → returned as-is
 *   - `FormFieldOptionGroup<T>[]` → returned as-is
 *
 * @returns An array of normalized options where every item is either:
 *   - `FormFieldOption<T>` or
 *   - `FormFieldOptionGroup<T>`
 *
 * @example
 * ```ts
 * normalizeOptions(["apple", "banana"]);
 * // returns [new FormFieldOption("apple"), new FormFieldOption("banana")]
 *
 * normalizeOptions([
 *   new FormFieldOption("apple"),
 *   new FormFieldOptionGroup("Fruits", [new FormFieldOption("banana")])
 * ]);
 * // returns the same array (already normalized)
 * ```
 */
export function normalizeOptions<T>(
  options: FormFieldOptionConfig<T> | FormFieldOptionGroup<T>[],
) {
  return options.map((opt) => {
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
}

export function isOptionObject<T>(
  opt: any,
): opt is { value: T; label: string } {
  return opt && typeof opt === "object" && "value" in opt && "label" in opt;
}
