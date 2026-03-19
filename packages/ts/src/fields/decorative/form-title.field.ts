import { FormFieldConfig, FieldDecorative } from "../../core";

/**
 * Enumeration for form title heading levels.
 *
 * Maps directly to HTML heading tags H1–H6.
 */
export enum FormTitleLevel {
  H1 = 1,
  H2,
  H3,
  H4,
  H5,
  H6,
}

/**
 * A display-only title/heading for forms.
 *
 * Extends `FormField<string>` to integrate with form layout and rendering,
 * but does not accept user input.
 *
 * @example
 * // Simple title
 * const title = new FormTitle("User Information");
 *
 * // Title with specific heading level
 * const sectionTitle = new FormTitle("Address Details", FormTitleLevel.H2);
 *
 * @remarks
 * The `level` property controls which HTML heading tag is used (H1–H6).
 * Useful for organizing complex forms into sections.
 */
export class FormTitle extends FieldDecorative {
  /** Heading level for the title (H1–H6) */
  level: FormTitleLevel;

  /**
   * Constructs a new `FormTitle`.
   *
   * @param valueOrConfig - Either a string representing the title text,
   *                        or a full field configuration object.
   * @param level - Optional heading level, default is `H1`.
   */
  constructor(
    valueOrConfig:
      | string
      | (Partial<FieldDecorative> & { level?: FormTitleLevel }),
    level?: FormTitleLevel,
  ) {
    const config: any =
      typeof valueOrConfig === "string"
        ? { value: valueOrConfig, level }
        : valueOrConfig;

    super({
      className: config.className || `form-title ${level}`,
      ...config,
      component: "form-title",
    });

    this.level = config.level || FormTitleLevel.H1;
  }
}
