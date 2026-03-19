import { toTitleCase } from "../../utils";
import { AbstractFormElementConfig } from "../interfaces";
import { FieldErrors } from "../interfaces/field-error";
import { FieldKind } from "../interfaces/filed-kind";
import { FormFieldTrigger } from "../interfaces/triggers";

export abstract class AbstractFormElement<T = unknown> {
  abstract readonly kind: FieldKind;
  /** Immutable identity */

  readonly component: string;
  readonly className: string;
  readonly id: string;
  readonly name?: string;

  key?: string;

  // UI
  label?: string;
  placeholder?: string;
  description?: string;
  hint?: string;

  /** Runtime state */
  hidden?: boolean;
  disabled?: boolean;
  required?: boolean;
  value?: T;

  // UX
  readonly?: boolean;
  autofocus?: boolean;
  tabIndex?: number;

  // other
  form?: string;

  order?: number;
  aria?: Record<string, string>;
  data?: Record<string, string>;
  meta?: Record<string, any>;
  errors?: FieldErrors | null;
  triggers?: FormFieldTrigger<T>[];

  constructor(config: AbstractFormElementConfig<T>) {
    this.component = config.component;

    this.className = config.className || this.component;

    this.key = config.key;

    this.id =
      config.id || this.key || `${config.component}-${crypto.randomUUID()}`;

    this.label =
      typeof config.label === "string" ? config.label : toTitleCase(config.key);

    this.name = config.name || this.key;

    // UI
    this.placeholder = config.placeholder;
    this.description = config.description;
    this.hint = config.hint;

    // Runtime state
    this.hidden = config.hidden;
    this.disabled = config.disabled;
    this.required = config.required;
    this.value = config.value;

    // UX
    this.readonly = config.readonly;
    this.autofocus = config.autofocus;
    this.tabIndex = config.tabIndex;

    // Other
    this.form = config.form;
    this.order = config.order;

    this.aria = config.aria;
    this.data = config.data;
    this.meta = config.meta;
    this.errors = config.errors;
    this.triggers = config.triggers;
  }
}
