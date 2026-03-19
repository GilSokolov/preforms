import { ArrayAggregate, FormElement } from "../interfaces";
import { FieldArrayConfig } from "../interfaces/field-array-config";

import { AbstractFormElement } from "./abstract-form-element";

export class FieldArray<T = unknown> extends AbstractFormElement<T[]> {
  readonly kind = "array" as const;
  override key: string;
  readonly fields: FormElement[];
  readonly aggregates: ArrayAggregate[];
  declare label: string;
  minItems?: number;
  maxItems?: number;
  addButton?: boolean;
  removeButton?: boolean;

  constructor(config: FieldArrayConfig<T>) {
    super({ component: "array", ...config });
    this.key = config.key;
    this.fields = config.fields;
    this.aggregates = config.aggregates || [];
    this.value = config.value || [];
    this.minItems = config.minItems;
    this.maxItems = config.maxItems;
    this.addButton = config.addButton;
    this.removeButton = config.removeButton;

    if (config.uniqueBy) {
      this.aggregates.push({
        field: config.uniqueBy,
        action: "unique",
      });
    }
  }
}
