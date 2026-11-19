import type {
  FormFieldOptionConfig,
  FormFieldOptionGroupConfig,
  FormFieldOptionsInput,
} from "../core/interfaces/form-field-config";
import { FormFieldOption } from "../core/models/field-option";
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
  options: FormFieldOptionConfig<T> | FormFieldOptionsInput<T>,
): (FormFieldOption<T> | FormFieldOptionGroup<T>)[] {
  return (options as FormFieldOptionsInput<T>).map((opt) =>
    normalizeOption<T>(opt),
  );
}

/**
 * Normalizes one entry of an `options` list. Groups (instances or plain
 * `{ label, options }` objects) become `FormFieldOptionGroup`s; everything else
 * becomes a `FormFieldOption`.
 */
export function normalizeOption<T>(
  opt: FormFieldOptionsInput<T>[number],
): FormFieldOption<T> | FormFieldOptionGroup<T> {
  if (opt instanceof FormFieldOption || opt instanceof FormFieldOptionGroup) {
    return opt;
  }

  if (isOptionGroupConfig<T>(opt)) {
    return new FormFieldOptionGroup<T>(opt.label, opt.options, opt.disabled);
  }

  if (typeof opt === "string" || typeof opt === "number") {
    return new FormFieldOption<T>(opt as T);
  }

  if (isOptionObject<T>(opt)) {
    return new FormFieldOption<T>(opt);
  }

  throw new Error(
    `Invalid option type. Must be FormFieldOption<T>, FormFieldOptionGroup<T>, primitive, { value: T; label: string } or { label: string; options: [...] }`,
  );
}

/**
 * Expands groups into their options, for controls that have no group concept
 * (radio, autocomplete, datalist).
 */
export function flattenOptions<T>(
  options: readonly (FormFieldOption<T> | FormFieldOptionGroup<T>)[] | undefined,
): FormFieldOption<T>[] {
  return (options ?? []).flatMap((o) =>
    o instanceof FormFieldOptionGroup ? o.options : [o],
  );
}

/** A plain `{ label, options: [...] }` object (no `value`) is a group. */
export function isOptionGroupConfig<T>(
  opt: unknown,
): opt is FormFieldOptionGroupConfig<T> {
  return (
    !!opt &&
    typeof opt === "object" &&
    !("value" in opt) &&
    "label" in opt &&
    Array.isArray((opt as { options?: unknown }).options)
  );
}

export function isOptionObject<T>(
  opt: any,
): opt is { value: T; label: string } {
  return opt && typeof opt === "object" && "value" in opt && "label" in opt;
}
