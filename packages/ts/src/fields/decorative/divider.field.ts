import { FieldDecorative, FormFieldConfig } from "../../core";

/**
 * A visual divider or separator for forms.
 *
 * Extends `{@link FieldDecorative}` and is purely display-oriented.
 *
 * @example
 * // Simple divider
 * const divider = new FormDivider();
 *
 * // Divider with custom CSS class
 * const styledDivider = new FormDivider({ class: "my-divider" });
 *
 * @remarks
 * This field has no value (`value = null`) and does not accept input.
 * Its primary purpose is to improve form layout and readability.
 */
export class FormDivider extends FieldDecorative {
  /**
   * Constructs a new `FormDivider`.
   *
   * @param config - Optional configuration object for CSS classes, id, or accessibility attributes.
   */
  constructor(config: Partial<FormFieldConfig<null>> = {}) {
    super({
      ...config,
      component: "form-divider",
    });
  }
}
