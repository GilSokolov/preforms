import { FieldDecorative, AbstractFormElementConfig } from "../core";
import type { ButtonIcon } from "../core/interfaces/field-icon";

export interface LinkFieldConfig extends Partial<AbstractFormElementConfig> {
  href: string;
  target?: "_blank" | "_self";
  rel?: string;
  icons?: ButtonIcon[];
}

/**
 * A navigational link, styled like a control but rendered as an anchor.
 *
 * Use for OAuth redirects, "terms and conditions", or any destination
 * outside the form's own submit/trigger flow.
 *
 * @example
 * new LinkField({ href: "/auth/google", label: "Continue with Google", icons: [{ name: "google", side: "left" }] });
 * new LinkField({ href: "/terms", label: "Terms and conditions", target: "_blank" });
 */
export class LinkField extends FieldDecorative {
  href: string;
  target?: string;
  rel?: string;
  icons?: ButtonIcon[];

  constructor(config: LinkFieldConfig) {
    super({
      ...config,
      component: "form-link",
    });

    this.href = config.href;
    this.target = config.target;
    this.rel = config.rel;
    this.icons = config.icons;
  }
}
