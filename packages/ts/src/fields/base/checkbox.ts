import { FormField } from "../../core";
import { InputFieldConfigDerived } from "./input.field";

/**
 * A single checkbox field
 *
 * Can be instantiated with a label string or full config
 *
 * Example:
 * ```ts
 * new CheckboxField("Accept Terms");
 * new CheckboxField({ key: "acceptTerms", value: true });
 * ```
 */
export class CheckboxField<T = boolean> extends FormField<T> {
  constructor(keyOrConfig: string | InputFieldConfigDerived<T>, value?: T) {
    const config: InputFieldConfigDerived<T> =
      typeof keyOrConfig === "string"
        ? { key: keyOrConfig, value }
        : keyOrConfig;

    super({
      ...config,
      type: "checkbox",
      component: "checkbox",
    });
  }
}
