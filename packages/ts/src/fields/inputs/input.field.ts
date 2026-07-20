import { FormField, FormFieldConfig } from "../../core";

/**
 * Configuration for InputField.
 *
 * @template T The value type of the field.
 */
export interface InputFieldConfig<T = any> extends Omit<
  FormFieldConfig<T>,
  "component"
> {
  /**
   * Native input type hint for the UI layer.
   *
   * Examples:
   * - "color"
   * - "datetime-local"
   * - "file"
   * - "range"
   * - "time"
   * - "url"
   * - "week"
   *
   * This value is passed directly to the renderer and is not interpreted by the core.
   */
  type: string;
}

export type InputFieldConfigDerived<T = any> = Omit<
  InputFieldConfig<T>,
  "type"
>;

/**
 * InputField is a generic field for arbitrary input types.
 *
 * It is intended as an escape hatch for native input types that do not
 * warrant a dedicated field class.
 *
 * ## When to use InputField
 * - Rare or platform-specific input types
 * - Custom parsing or formatting logic
 * - Advanced or experimental UI components
 *
 * ## Examples
 *
 * ### Color picker
 * ```ts
 * new InputField<string>({
 *   key: "themeColor",
 *   label: "Theme color",
 *   type: "color",
 * });
 * ```
 *
 * ### File upload
 * ```ts
 * new InputField<File | null>({
 *   key: "avatar",
 *   label: "Profile picture",
 *   type: "file",
 * });
 * ```
 *
 * ### Range input
 * ```ts
 * new InputField<number>({
 *   key: "volume",
 *   label: "Volume",
 *   type: "range",
 * });
 * ```
 *
 * ### Hidden field
 * ```ts
 * new InputField<string>({
 *   key: "csrfToken",
 *   type: "hidden",
 *   value: token,
 * });
 * ```
 *
 * ## Design notes
 * - InputField is intentionally unopinionated
 * - Validation, triggers, and UI behavior are handled externally
 * - If an input becomes common, promote it to a dedicated field class
 *
 * @template T The value type of the field
 */
export class InputField<T = any> extends FormField<T> {
  override type: string;
  constructor(config: InputFieldConfig<T>) {
    super({
      ...config,
      component: "input",
    });

    this.type = config.type;
  }
}
