import { InputFieldConfigDerived, NumberField } from '@preforms/ts';

interface PasswordStrengthFieldConfig extends InputFieldConfigDerived<number> {
  low: number;
  high: number;
  optimum: number;
}

export class PasswordStrengthField extends NumberField {
  override component = 'password-strength';
  low: number;
  high: number;
  optimum: number;

  constructor(config: PasswordStrengthFieldConfig) {
    super(config);
    this.low = config.low;
    this.high = config.high;
    this.optimum = config.optimum;
  }
}
