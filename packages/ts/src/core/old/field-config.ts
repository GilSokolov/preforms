// import { FormFieldConfig } from "../interfaces/field";
// import { FormFieldTrigger } from "../interfaces/triggers";

// export type FieldKind = "field" | "group" | "array" | "wrapper" | "decorative";

// /**
//  * Base configuration for all form fields.
//  *
//  * This interface is framework-agnostic and describes both:
//  * - static field definition (what the field is)
//  * - initial runtime state (how the field behaves on load)
//  *
//  * Specialized fields (FieldArray, OutputField, Layout fields, etc.)
//  * should extend this config with additional properties.
//  */
// export interface $FormFieldConfig<T = unknown> {
//   /**
//    * UI control identifier.
//    * Used by the renderer to decide which component to render
//    * (e.g. "input", "select", "array", "form-row", "output").
//    */
//   component: string;

//   /**
//    * Unique field identifier within the form.
//    * Used for value mapping, triggers, and dependencies.
//    */
//   key?: string;

//   /**
//    * Human-readable label displayed in the UI.
//    */
//   label?: string;

//   /**
//    * Accessibility attributes applied to the rendered element.
//    * Example: { 'aria-describedby': 'price-hint' }
//    */
//   aria?: Record<string, string | number | boolean>;

//   /**
//    * Custom data attributes for analytics, testing, or renderer-specific logic.
//    * Example: { testid: 'price-input' }
//    */
//   data?: Record<string, string | number | boolean>;

//   /**
//    * Logical or HTML input type.
//    * Example: "text", "number", "email", "password".
//    */
//   type?: string;

//   /**
//    * Initial value of the field.
//    * Can be updated dynamically at runtime via triggers.
//    */
//   value?: T;

//   /**
//    * Options for selectable fields (select, radio, checkbox-group, etc.).
//    */
//   options?: FormFieldOptionConfig<T>;

//   /**
//    * Child fields for container or layout fields
//    * (fieldset, form-row, grid, group, etc.).
//    */
//   fields?: FormFieldConfig<any>[];

//   /**
//    * Trigger definitions that react to field events
//    * and update state, fetch data, or validate other fields.
//    */
//   triggers?: FormFieldTrigger<T>[];

//   /**
//    * Whether the field is hidden from the UI.
//    * Hidden fields may still exist in the form model.
//    */
//   hidden?: boolean;

//   /**
//    * Whether the field is disabled.
//    * Disabled fields typically do not accept user input.
//    */
//   disabled?: boolean;

//   /**
//    * Whether the field is required.
//    * Used by validation and UI indicators.
//    */
//   required?: boolean;

//   /**
//    * Whether the field is read-only.
//    * Read-only fields are not editable but may still submit values.
//    */
//   readonly?: boolean;

//   /**
//    * Whether the field accepts multiple values.
//    * Commonly used for selects, checkboxes, or arrays.
//    */
//   multiple?: boolean;

//   /**
//    * Placeholder text shown when the field has no value.
//    */
//   placeholder?: string;

//   /**
//    * Static descriptive text explaining the field's purpose.
//    * Typically shown as help text and does not change at runtime.
//    */
//   description?: string;

//   /**
//    * Dynamic hint or validation message.
//    * Often updated at runtime via triggers or validation rules.
//    */
//   hint?: string;

//   /**
//    * CSS class or classes applied to the rendered field.
//    */
//   className?: string;

//   /**
//    * DOM id attribute for the rendered field.
//    * Defaults to a value derived from the field key.
//    */
//   id?: string;

//   /**
//    * Order index used for sorting fields during rendering.
//    */
//   order?: number;

//   /**
//    * Minimum numeric value (for number-like inputs).
//    */
//   min?: number;

//   /**
//    * Maximum numeric value (for number-like inputs).
//    */
//   max?: number;

//   /**
//    * Step increment for numeric inputs.
//    */
//   step?: number;

//   /**
//    * Name attribute used during form submission.
//    */
//   name?: string;

//   /**
//    * Maximum allowed length for text-based inputs.
//    */
//   maxLength?: number;

//   /**
//    * Minimum allowed length for text-based inputs.
//    */
//   minLength?: number;

//   /**
//    * Pattern used for validation.
//    * Can be a RegExp or a string converted to RegExp by the renderer.
//    */
//   pattern?: string | RegExp;

//   /**
//    * Number of visible rows for multiline text inputs (textarea).
//    */
//   rows?: number;

//   /**
//    * Specifies the visible width of a text area.
//    */
//   cols?: number;

//   /**
//    * Specifies how the text in a text area is to be wrapped when submitted in a form
//    */
//   wrap?: "hard" | "soft";

//   /**
//    * defines whether the element may be checked for spelling errors.
//    */
//   spellcheck?: boolean;

//   autocapitalize?: "on" | "off" | "none" | "words" | "characters";

//   /**
//    * Browser autocomplete behavior.
//    * Example: "on", "off", "email", "username".
//    */
//   autocomplete?: "on" | "off" | string;

//   /**
//    * Tab order for keyboard navigation.
//    */
//   tabIndex?: number;

//   /**
//    * automatically get focus
//    */
//   autofocus?: boolean;

//   /**
//    * width in characters
//    */
//   size?: number;

//   /**
//    *  should be pre-selected (checkbox, radio)
//    */
//   checked?: boolean;

//   /**
//    * the form the element belongs to
//    */
//   form?: string;
// }

// // export type FieldConfigForDerived<T> = Omit<FormFieldConfig<T>, "component">;
// export type $FieldConfigForDerived<T> = Omit<
//   FormFieldConfig<T>,
//   "component" | "kind"
// >;

// export type $FieldBaseConfig<T> = Pick<
//   FormFieldConfig<T>,
//   | "key"
//   | "label"
//   | "value"
//   | "hidden"
//   | "disabled"
//   | "required"
//   | "readonly"
//   | "order"
//   | "className"
//   | "id"
//   | "aria"
//   | "data"
//   | "triggers"
//   | "component"
// >;

// export type $ContainerFieldConfig = Pick<FormFieldConfig<unknown>, "fields">;

// export type $FormFieldOptionConfig<T> = T[] | { value: T; label: string }[];
