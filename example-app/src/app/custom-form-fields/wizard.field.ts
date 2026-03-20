import { FieldGroup, FieldWrapper, FieldWrapperConfig } from '@preforms/ts';

export interface WizardFieldConfig extends FieldWrapperConfig {
  fields: FieldGroup[];
}

export class WizardField extends FieldWrapper {
  override component = 'wizard';
  override fields: FieldGroup[];

  constructor(config: WizardFieldConfig) {
    super(config);
    this.fields = config.fields;
  }
}
