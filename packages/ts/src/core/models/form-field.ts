import { FormFieldConfig } from "../interfaces/form-field-config";
import { AbstractFormElement } from ".";
import { FormFieldOption } from "./field-option";
import { PatternRule } from "../interfaces/pattern-rule";
import { normalizePattern } from "../../utils/normalize-pattern";
import { FormFieldIcon } from "../interfaces";

export class FormField<T = unknown> extends AbstractFormElement<T> {
  kind = "field" as const;
  declare key: string;
  declare name: string;
  declare label: string;

  type?: string;
  autocomplete: "on" | "off" | string;
  options?: FormFieldOption<T>[];
  multiple?: boolean;
  min?: number;
  max?: number;
  step?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: PatternRule[];
  rows?: number;
  cols?: number;
  wrap?: "hard" | "soft";
  spellcheck?: boolean;
  autocapitalize?: "on" | "off" | "none" | "words" | "characters";

  size?: number;
  checked?: boolean;
  icons?: FormFieldIcon[];

  constructor(config: FormFieldConfig<T>) {
    super(config);
    // Required
    this.key = config.key;

    // Explicit assignment (no surprises)
    this.type = config.type;
    this.multiple = config.multiple;
    this.min = config.min;
    this.max = config.max;
    this.step = config.step;
    this.maxLength = config.maxLength;
    this.minLength = config.minLength;
    this.rows = config.rows;
    this.cols = config.cols;
    this.wrap = config.wrap;
    this.spellcheck = config.spellcheck;
    this.autocapitalize = config.autocapitalize;
    this.autocomplete = config.autocomplete || config.name || config.key;
    this.size = config.size;
    this.checked = config.checked;
    this.icons = config.icons;

    // options normalization
    if (config.options) {
      this.options = config.options.map((opt) =>
        opt instanceof FormFieldOption ? opt : new FormFieldOption(opt),
      );
    }

    // pattern normalization
    if (config.pattern) {
      this.pattern = normalizePattern(config.pattern);
    }
  }
}
