import { FieldDecorative, AbstractFormElementConfig } from "../core";

export class Spacer extends FieldDecorative {
  constructor(config: Partial<AbstractFormElementConfig> = {}) {
    super({
      ...config,
      component: "form-spacer",
    });
  }
}
