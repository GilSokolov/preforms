import { FormFieldTrigger } from "./triggers";

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
export interface AbstractFormElementConfig<T = unknown> {
  key?: string;
  /**
   * UI control identifier.
   * Used by the renderer to decide which component to render
   * (e.g. "input", "select", "array", "form-row", "output").
   */
  component: string;

  parent?: string;

  /**
   * Logical or HTML input type.
   * Example: "text", "number", "email", "password".
   */
  type?: string;

  /**
   * Human-readable label displayed in the UI.
   */
  label?: string;

  /**
   * Placeholder text shown when the field has no value.
   */
  placeholder?: string;

  /**
   * Accessibility attributes applied to the rendered element.
   * Example: { 'aria-describedby': 'price-hint' }
   */
  aria?: Record<string, string>;

  /**
   * CSS class or classes applied to the rendered field.
   */
  className?: string;

  /**
   * Custom data attributes for analytics, testing, or renderer-specific logic.
   * Example: { testid: 'price-input' }
   */
  data?: Record<string, string>;

  /**
   * Initial value of the field.
   * Can be updated dynamically at runtime via triggers.
   */
  value?: T;

  /**
   * Trigger definitions that react to field events
   * and update state, fetch data, or validate other fields.
   */
  triggers?: FormFieldTrigger<T>[];

  /**
   * Whether the field is hidden from the UI.
   * Hidden fields may still exist in the form model.
   */
  hidden?: boolean;

  /**
   * Whether the field is disabled.
   * Disabled fields typically do not accept user input.
   */
  disabled?: boolean;

  /**
   * Whether the field is required.
   * Used by validation and UI indicators.
   */
  required?: boolean;

  /**
   * Whether the field is read-only.
   * Read-only fields are not editable but may still submit values.
   */
  readonly?: boolean;

  /**
   * Static descriptive text explaining the field's purpose.
   * Typically shown as help text and does not change at runtime.
   */
  description?: string;

  /**
   * Dynamic hint or validation message.
   * Often updated at runtime via triggers or validation rules.
   */
  hint?: string;

  /**
   * Name attribute used during form submission.
   */
  name?: string;

  /**
   * DOM id attribute for the rendered field.
   * Defaults to a value derived from the field key.
   */
  id?: string;

  /**
   * Order index used for sorting fields during rendering.
   */
  order?: number;

  /**
   * Tab order for keyboard navigation.
   */
  tabIndex?: number;

  /**
   * automatically get focus
   */
  autofocus?: boolean;

  /**
   * the form the element belongs to
   */
  form?: string;

  meta?: Record<string, any>;

  errors?: Record<string, any> | null;
}
