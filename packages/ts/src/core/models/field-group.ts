import { FormElement } from "../interfaces";
import { FieldGroupConfig } from "../interfaces/field-group-config";
import { AbstractFormElement } from "./abstract-form-element";

export class FieldGroup<T = unknown> extends AbstractFormElement<T> {
  kind = "group" as const;
  fields: FormElement[];
  override key: string;
  declare label: string;

  constructor(config: FieldGroupConfig<T>) {
    super({ component: "group", ...config });
    this.fields = config.fields;
    this.key = config.key;
  }
}
