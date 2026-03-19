import { AbstractFormElementConfig } from "./base-field-config";
import { FormElement } from "./form-element";
import { Optional } from "./optional";

/**
 * Base configuration for all form fields.
 *
 * This interface is framework-agnostic and describes both:
 * - static field definition (what the field is)
 * - initial runtime state (how the field behaves on load)
 *
 * Specialized fields (FieldArray, OutputField, Layout fields, etc.)
 * should extend this config with additional properties.
 */
export interface FieldGroupConfig<T = unknown> extends Optional<
  AbstractFormElementConfig<T>,
  "component"
> {
  key: string;
  /**
   * Child fields for container or layout fields
   * (fieldset, form-row, grid, group, etc.).
   */
  fields: FormElement<any>[];

  componenet?: string;
}
