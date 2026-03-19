import {
  AbstractFormElement,
  AbstractFormElementConfig,
  FormFieldIcon,
} from "..";

type ButtonIcon = Pick<FormFieldIcon, "name" | "side">;

/**
 * Configuration for FieldButton
 */
export interface FieldButtonConfig<T = unknown> extends Omit<
  AbstractFormElementConfig<T>,
  "component"
> {
  /**
   * Button type attribute.
   * - "submit" → submits the form
   * - "reset" → resets the form
   * - "button" → standard button
   */
  type: "submit" | "reset" | "button";

  /** Maps to HTML `formaction` attribute */
  formaction?: string;

  /** Maps to HTML `formmethod` attribute */
  formmethod?: string;

  command?: "show-modal" | "close" | "request-close";

  commandfor?: string;

  icons?: ButtonIcon[];
}

/**
 * FieldButton represents a form button.
 *
 * Can be used to submit forms, reset values, or trigger custom actions.
 *
 * ## Example
 * ```ts
 * new FieldButton({
 *   key: "saveBtn",
 *   type: "submit",
 * });
 * ```
 */
export class FieldButton<T = any> extends AbstractFormElement<T> {
  kind = "button" as const;

  type: "submit" | "reset" | "button";

  /** Maps to HTML formaction */
  formaction?: string;

  /** Maps to HTML formmethod */
  formmethod?: string;

  command?: "show-modal" | "close" | "request-close";

  commandfor?: string;

  icons?: ButtonIcon[];

  constructor(config: FieldButtonConfig<T>) {
    super({
      ...config,
      type: config.type ?? "button", // default to "button"
      component: "button",
    });

    this.type = config.type;
    this.formaction = config.formaction;
    this.formmethod = config.formmethod;
    this.command = config.command;
    this.commandfor = config.commandfor;
    this.icons = config.icons;
  }
}
