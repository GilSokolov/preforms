import { FieldDecorative, FormFieldConfig } from "../../core";

export class FormSpacer extends FieldDecorative {
  /**
   * Constructs a new `FormSpacer`.
   *
   * @param config - Optional configuration object for CSS classes, id, or accessibility attributes.
   */
  constructor(config: Partial<FormFieldConfig<null>> = {}) {
    super({
      ...config,
      component: "form-spacer",
    });
  }
}
