import { FormFieldOption, FormFieldConfig, FieldArray } from "../../core";

import { CheckboxField } from "./checkbox";

/**
 * A group of checkboxes
 *
 * Easy setup with string array or FormFieldOption[]
 *
 * Example:
 * ```ts
 * new CheckboxFieldGroup("interests", ["music", "sports"], "music");
 * new CheckboxFieldGroup("interests", [new FormFieldOption(1, "Music")]);
 * new CheckboxFieldGroup("interests", [
 *   { value: "music", label: "Music" },
 *   { value: "sports", label: "Sports" }
 * ]);
 * ```
 */
export class CheckboxFieldGroup<T = string> extends FieldArray<T> {
  constructor(
    key: string,
    options: string[] | FormFieldOption[],
    value?: T[],
    config: Partial<FormFieldConfig<T[]>> = {},
  ) {
    const fields: any = options
      .map((o) => new FormFieldOption(o))
      .map((o) => new CheckboxField<T>(o.value, o.value));

    super({
      ...config,
      key,
      fields,
      value,
      component: "checkbox-group",
    });
  }
}
