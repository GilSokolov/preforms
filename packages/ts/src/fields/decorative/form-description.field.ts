import { FieldDecorative, FormFieldConfig } from "../../core";

/**
 * A display-only description or helper text for forms.
 *
 * Extends `{@link FieldDecorative}` and is purely display-oriented.
 *
 * @example
 * // Simple description
 * const description = new FormDescription(
 *   "Please enter your full legal name."
 * );
 *
 * // Using a full configuration object
 * const customDescription = new FormDescription({
 *   value: "All fields marked with * are required.",
 *   class: "form-hint",
 * });
 *
 * @remarks
 * This field does not accept user input. Its `value` is purely for display.
 * Useful for instructions, hints, or explanations within forms.
 */
export class FormDescription extends FieldDecorative {
  /**
   * Constructs a new `FormDescription`.
   *
   * @param valueOrConfig - Either a string for the description text,
   *                        or a full field configuration object.
   */
  constructor(valueOrConfig: string | Partial<FormFieldConfig>) {
    const config =
      typeof valueOrConfig === "string"
        ? { value: valueOrConfig }
        : valueOrConfig;

    super({
      ...config,
      component: "form-description",
    });
  }
}
