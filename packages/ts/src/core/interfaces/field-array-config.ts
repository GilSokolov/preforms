import { ArrayAggregate } from "./array-aggregate";
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
export interface FieldArrayConfig<T = unknown> extends Optional<
  AbstractFormElementConfig<T[]>,
  "component"
> {
  key: string;
  /**
   * Child fields for container or layout fields
   * (fieldset, form-row, grid, group, etc.).
   */
  fields: FormElement[];

  /**
   * Template that defines the structure of each item in the array.
   *
   * Each FormField should correspond to a property of `T`
   * and use the appropriate value type.
   */

  /**
   * Aggregation/validation rules applied to the array.
   * Examples: sum, count, avg, uniqueness constraints.
   */
  aggregates?: ArrayAggregate[];

  /** Minimum number of items allowed in the array */
  minItems?: number;

  /** Maximum number of items allowed in the array */
  maxItems?: number;

  /**
   * Property key of `T` used to enforce uniqueness
   * across array items.
   */
  uniqueBy?: keyof T & string;

  addButton?: boolean;
  removeButton?: boolean;
}
