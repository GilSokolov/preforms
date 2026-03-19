import { FormElement, FieldWrapperConfig, FieldWrapper } from "../../core";

/**
 * Configuration options for a `FormGrid`.
 *
 * Extends {@link FieldWrapperConfig} to inherit standard field properties
 * such as `key`, `label`, `value`, `required`, etc.
 *
 * Additional layout-specific properties:
 *
 * @property columns - Defines the CSS grid columns. Example: "1fr 2fr 1fr".
 * @property gap - Defines the spacing between grid items. Example: "1rem", "8px".
 */
export interface FormGridConfig extends Omit<FieldWrapperConfig, "component"> {
  columns?: string;
  gap?: string;
}

/**
 * A form field container that arranges child fields in a CSS grid layout.
 *
 * Extends `FormFieldGroup<T>` and enforces `component = "form-grid"`.
 * Allows specifying column widths and spacing between fields for flexible layouts.
 *
 * @example
 * // Overload 1: fields + optional config
 * const contactFormGrid = new FormGrid(
 *   [new FirstName(), new LastName()]
 * );
 *
 * @example
 * const contactFormGrid = new FormGrid({
 *   fields: [
 *     new FirstNameField(),
 *     new LastNameField(),
 *     new EmailField(),
 *   ],
 *   columns: "1fr 2fr",
 *   gap: "1.5rem",
 * });
 *
 * @typeparam T - The shape of the grouped value object.
 */
export class FormGrid extends FieldWrapper {
  /** CSS grid template columns (default: "1fr") */
  columns: string;

  /** CSS gap between fields (default: "1rem") */
  gap: string;

  constructor(fields: FormElement[], config?: Partial<FormGridConfig>);
  constructor(config: FormGridConfig);

  constructor(
    fieldsOrConfig: FormElement[] | FormGridConfig,
    maybeConfig: Partial<FormGridConfig> = {},
  ) {
    const config: FormGridConfig = Array.isArray(fieldsOrConfig)
      ? {
          ...maybeConfig,
          fields: fieldsOrConfig,
        }
      : fieldsOrConfig;

    super({
      ...config,
      component: "form-grid",
    });

    this.columns = config.columns || "1fr";
    this.gap = config.gap || "1rem";
  }
}
