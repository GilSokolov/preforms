import { FieldDecorative } from "../../core";

export interface FormListConfig extends Partial<FieldDecorative> {
  options: string[];
}

export class FormList extends FieldDecorative {
  options: string[];
  constructor(optionsOrConfig: string[] | FormListConfig) {
    const config: FormListConfig = Array.isArray(optionsOrConfig)
      ? { options: optionsOrConfig }
      : optionsOrConfig;

    super({
      className: config.className || "form-list",
      ...config,
      component: "form-list",
    });

    this.options = config.options;
  }
}
