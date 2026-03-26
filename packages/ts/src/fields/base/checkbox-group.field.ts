import {
  FieldArray,
  FieldArrayConfig,
  FormFieldOption,
  FormFieldOptionConfig,
} from "../../core";

import { CheckboxField } from "./checkbox";

export interface CheckboxGroupFieldConfig<T> extends Partial<
  FieldArrayConfig<T>
> {
  key: string;
  options: FormFieldOptionConfig<T>;
  value?: T[];
}

/**
 * A group of checkboxes
 *
 * Easy setup with string array or FormFieldOption[]
 *
 * Example:
 * ```ts
 * new CheckboxGroupField("interests", ["music", "sports"], ["music"]);
 * new CheckboxGroupField("interests", [new FormFieldOption(1, "Music")]);
 * new CheckboxGroupField("interests", [
 *   { value: "music", label: "Music" },
 *   { value: "sports", label: "Sports" }
 * ]);
 * ```
 */
export class CheckboxGroupField<T = string> extends FieldArray<T> {
  constructor(config: CheckboxGroupFieldConfig<T>);
  constructor(key: string, options: string[] | FormFieldOption[], value?: T[]);
  constructor(
    keyOrConfig: string | CheckboxGroupFieldConfig<T>,
    options?: string[] | FormFieldOption[],
    value?: T[],
  ) {
    const config =
      typeof keyOrConfig === "string"
        ? {
            key: keyOrConfig,
            value,
            options,
          }
        : keyOrConfig;

    const fields = (config.options as string[] | FormFieldOption[])
      .map((o) => new FormFieldOption(o))
      .map((o: FormFieldOption) => new CheckboxField<T>(o.value, o.value));

    super({ ...config, fields, component: "checkbox-group" });
  }
}
