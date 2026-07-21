import { AbstractFormElement } from "./abstract-form-element";
import type { AbstractFormElementConfig } from "../interfaces/base-field-config";

export interface FieldExternalConfig<T = unknown>
  extends Omit<AbstractFormElementConfig<T>, "component"> {
  /**
   * Identifies which third-party SDK owns this field
   * (e.g. "stripe-card", "recaptcha-v2", "plaid-link").
   *
   * Doubles as the field's `component` string, so each provider gets its
   * own entry in the renderer registry — one host app can register a
   * different component per provider instead of switching on `provider`
   * inside a single shared one.
   */
  provider: string;

  /**
   * Provider-specific mount options, passed through untouched
   * (e.g. Stripe Elements appearance, reCAPTCHA sitekey).
   */
  options?: Record<string, unknown>;
}

/**
 * A field whose UI is owned by a third-party SDK mounted into a DOM node
 * preforms provides, rather than rendered by preforms itself.
 *
 * The value is not typed by the user — it arrives asynchronously from the
 * external SDK's own callback. The host sets it the same way any control is
 * set (e.g. `FormStateService.setValue(field.id, token)`), so triggers and
 * validators react to it exactly like any other field's value.
 *
 * ## Example
 * ```ts
 * new FieldExternal({
 *   key: "paymentMethod",
 *   provider: "stripe-card",
 *   options: { appearance: { theme: "stripe" } },
 * });
 * ```
 */
export class FieldExternal<T = any> extends AbstractFormElement<T> {
  kind = "external" as const;

  provider: string;
  options?: Record<string, unknown>;

  constructor(config: FieldExternalConfig<T>) {
    super({
      ...config,
      component: config.provider,
    });

    this.provider = config.provider;
    this.options = config.options;
  }
}
