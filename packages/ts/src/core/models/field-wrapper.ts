import { FieldWrapperConfig, FormElement } from "../interfaces";

import { AbstractFormElement } from "./abstract-form-element";

export class FieldWrapper<T = unknown> extends AbstractFormElement<T> {
  kind = "wrapper" as const;
  fields: FormElement[];

  constructor(config: FieldWrapperConfig<T>) {
    super({ component: "wrapper", ...config });

    this.fields = config.fields;
  }
}
