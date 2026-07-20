import { FormField } from "../../core";
import { InputFieldConfigDerived } from "./input.field";

/**
 * ToggleField represents a boolean on/off switch.
 *
 * Semantically different from CheckboxField:
 * - Toggle → enable/disable, on/off
 * - Checkbox → accept/confirm
 *
 * Examples:
 * ```ts
 * new ToggleField("enableNotifications", setting?.enableNotifications);
 *
 * new ToggleField({
 *   key: "darkMode",
 *   label: "Dark mode",
 *   value: true,
 * });
 * ```
 */
export class ToggleField extends FormField<boolean> {
  constructor(
    keyOrConfig: string | InputFieldConfigDerived<boolean>,
    value = false,
  ) {
    const config: InputFieldConfigDerived<boolean> =
      typeof keyOrConfig === "string" ? { key: keyOrConfig } : keyOrConfig;

    super({
      value,
      ...config,
      component: "toggle",
    });
  }
}
