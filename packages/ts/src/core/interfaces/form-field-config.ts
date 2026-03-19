import { AbstractFormElementConfig } from "./base-field-config";
import { FormFieldIcon } from "./field-icon";
import { PatternInput } from "./pattern-rule";

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
export interface FormFieldConfig<
  T = unknown,
> extends AbstractFormElementConfig<T> {
  /**
   * Unique field identifier within the form.
   * Used for value mapping, triggers, and dependencies.
   */
  key: string;

  /**
   * Options for selectable fields (select, radio, checkbox-group, etc.).
   */
  options?: FormFieldOptionConfig<T>;

  /**
   * Whether the field accepts multiple values.
   * Commonly used for selects, checkboxes, or arrays.
   */
  multiple?: boolean;

  /**
   * Minimum numeric value (for number-like inputs).
   */
  min?: number;

  /**
   * Maximum numeric value (for number-like inputs).
   */
  max?: number;

  /**
   * Step increment for numeric inputs.
   */
  step?: number;

  /**
   * Maximum allowed length for text-based inputs.
   */
  maxLength?: number;

  /**
   * Minimum allowed length for text-based inputs.
   */
  minLength?: number;

  /**
   * Pattern used for validation.
   * Can be a RegExp or a string converted to RegExp by the renderer.
   */
  pattern?: PatternInput | PatternInput[];

  /**
   * Number of visible rows for multiline text inputs (textarea).
   */
  rows?: number;

  /**
   * Specifies the visible width of a text area.
   */
  cols?: number;

  /**
   * Specifies how the text in a text area is to be wrapped when submitted in a form
   */
  wrap?: "hard" | "soft";

  /**
   * defines whether the element may be checked for spelling errors.
   */
  spellcheck?: boolean;

  autocapitalize?: "on" | "off" | "none" | "words" | "characters";

  /**
   * Browser autocomplete behavior.
   * Example: "on", "off", "email", "username".
   */
  autocomplete?: "on" | "off" | string;

  /**
   * width in characters
   */
  size?: number;

  /**
   *  should be pre-selected (checkbox, radio)
   */
  checked?: boolean;

  icons?: FormFieldIcon[];
}

export type FormFieldOptionConfig<T> = T[] | { value: T; label: string }[];
