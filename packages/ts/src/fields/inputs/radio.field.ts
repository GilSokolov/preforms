import { FormField, FormFieldConfig, FormFieldOptionConfig } from "../../core";

export interface RadioFieldConfig<T> extends Partial<FormFieldConfig<T>> {
  key: string;
  options: FormFieldOptionConfig<T>;
}

/**
 * A radio field
 *
 * Allows single selection from an options array.
 *
 * Example:
 * ```ts
 * new RadioField("gender", ["male", "female"]);
 * new RadioField("gender", [
 *   { value: "male", label: "Male" },
 *   { value: "female", label: "Female" }
 * ]);
 * ```
 */
export class RadioField<T = string> extends FormField<T> {
  constructor(config: RadioFieldConfig<T>);
  constructor(key: string, options: FormFieldOptionConfig<T>, value?: T);

  constructor(
    keyOrConfig: string | RadioFieldConfig<T>,
    options?: FormFieldOptionConfig<T>,
    value?: T,
  ) {
    const config: RadioFieldConfig<T> =
      typeof keyOrConfig === "string"
        ? { key: keyOrConfig, options: options!, value }
        : keyOrConfig;

    super({
      ...config,
      component: "radio",
    });
  }
}
