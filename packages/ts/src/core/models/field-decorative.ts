import { AbstractFormElementConfig } from "../interfaces";
import { AbstractFormElement } from "./abstract-form-element";

export class FieldDecorative extends AbstractFormElement {
  kind = "decorative" as const;

  constructor(config: AbstractFormElementConfig) {
    super(config);
  }
}
