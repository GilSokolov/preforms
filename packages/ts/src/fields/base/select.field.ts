import { FormField, FormFieldConfig, FormFieldOptionConfig } from "../../core";

type SelectConfig<T> = Omit<FormFieldConfig<T>, "component">;

/**
 * A generic select/dropdown field.
 *
 * Extends `FormField<T>` and enforces `component = "select"`.
 * Supports generic value types (`string` or `number`).
 *
 * @example
 * // Using a key string
 * const countrySelect = new SelectField("country", "USA", true);
 *
 * // Using full configuration
 * const ratingSelect = new SelectField<number>({
 *   key: "rating",
 *   label: "Rating",
 *   value: 3,
 *   options: [1, 2, 3, 4, 5],
 *   required: true,
 * });
 *
 * @template T - Type of the selectable values (`string` or `number`).
 */
export class SelectField<
  T extends string | number = string,
> extends FormField<T> {
  // 🔹 overload signatures
  constructor(config: SelectConfig<T>, value?: T);
  constructor(key: string, options: FormFieldOptionConfig<T>, value?: T);

  constructor(
    keyOrConfig: string | SelectConfig<T>,
    valueOrOptions?: T | FormFieldOptionConfig<T>,
    value?: T,
  ) {
    const config: SelectConfig<T> =
      typeof keyOrConfig === "string"
        ? {
            key: keyOrConfig,
            value,
            options: valueOrOptions as FormFieldOptionConfig<T>,
          }
        : keyOrConfig;

    super({
      ...config,
      key: config.key,
      component: "select",
    });
  }
}
