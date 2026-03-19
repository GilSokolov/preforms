import {
  FormField,
  FormFieldConfig,
  FieldWrapperConfig,
  FieldWrapper,
  FormElement,
} from "../../core";

/**
 * Configuration options for a `FormRow`.
 *
 * Extends {@link FormFieldConfig} to inherit standard field properties
 * such as `key`, `label`, `value`, `required`, etc.
 *
 * Additional layout-specific properties:
 *
 * @property gap - Spacing between fields in the row. Default: "5px".
 * @property position - Alignment of the row: "start" (left) or "end" (right). Default: "start".
 */
export interface FormRowConfig extends Omit<FieldWrapperConfig, "component"> {
  fields: FormElement[];
  gap?: string;
  position?: "start" | "end" | "space-between";
}

/**
 * A form field container that arranges child fields in a horizontal row.
 *
 * Extends {@link FieldWrapper} and enforces `component = "form-row"`.
 * Provides customizable spacing and alignment for inline layout of fields.
 *
 * @example
 * // Overload 1: fields + optional config
 * const row1 = new FormRow(
 *   [new FirstName(), new LastName()]
 * );
 *
 * @example
 * // Overload 2: full config object
 * const row2 = new FormRow({
 *   fields: [new FirstNameField(), new LastNameField()],
 *   gap: "10px",
 *   position: "end",
 * });
 */
export class FormRow extends FieldWrapper {
  /** Spacing between fields in the row (default: "5px") */
  gap: string;

  /** Alignment of the row: "start" (left) or "end" (right) */
  position: "start" | "end" | "space-between";

  constructor(fields: FormElement[], config?: Partial<FormRowConfig>);
  constructor(config: FormRowConfig);

  constructor(
    fieldsOrConfig: FormElement[] | FormRowConfig,
    maybeConfig: Partial<FormRowConfig> = {},
  ) {
    const config: FormRowConfig = Array.isArray(fieldsOrConfig)
      ? {
          ...maybeConfig,
          fields: fieldsOrConfig,
        }
      : fieldsOrConfig;

    super({
      ...config,
      component: "form-row",
    });

    this.gap = config.gap ?? "5px";
    this.position = config.position ?? "start";
  }
}
