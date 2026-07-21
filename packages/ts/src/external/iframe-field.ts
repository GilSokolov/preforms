import { FieldExternal, FieldExternalConfig } from "../core/models/field-external";
import type { SchemaNode } from "../utils/transform";

export interface IframeFieldConfig<T = unknown>
  extends Omit<FieldExternalConfig<T>, "provider" | "options"> {
  src: string;
  sandbox?: string;
  allow?: string;
  /** Only postMessage events from this origin are accepted. */
  messageOrigin: string;
  /** Declarative shape applied to the postMessage payload before it becomes the field's value. */
  transform?: SchemaNode;
}

/**
 * An iframe embed whose value arrives via `window.postMessage` from the
 * embedded page, rather than user typing.
 *
 * Unlike other `FieldExternal` providers (Stripe, Plaid, ...), this one
 * needs no third-party SDK — any iframe + postMessage integration
 * (Calendly, DocuSign embedded signing, Typeform, ...) fits it directly.
 *
 * @example
 * new IframeField({
 *   key: "meeting",
 *   src: "https://calendly.com/your-org/intro-call",
 *   messageOrigin: "https://calendly.com",
 *   transform: { $: "payload.event.uri" },
 * });
 */
export class IframeField<T = any> extends FieldExternal<T> {
  src: string;
  sandbox?: string;
  allow?: string;
  messageOrigin: string;
  transform?: SchemaNode;

  constructor(config: IframeFieldConfig<T>) {
    super({ ...config, provider: "iframe" });

    this.src = config.src;
    this.sandbox = config.sandbox;
    this.allow = config.allow;
    this.messageOrigin = config.messageOrigin;
    this.transform = config.transform;
  }
}
