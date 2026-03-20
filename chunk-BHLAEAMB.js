import"./chunk-7DXB7J77.js";var o=`import { InputFieldConfigDerived, NumberField } from '@preforms/ts';\r
\r
interface PasswordStrengthFieldConfig extends InputFieldConfigDerived<number> {\r
  low: number;\r
  high: number;\r
  optimum: number;\r
}\r
\r
export class PasswordStrengthField extends NumberField {\r
  override component = 'password-strength';\r
  low: number;\r
  high: number;\r
  optimum: number;\r
\r
  constructor(config: PasswordStrengthFieldConfig) {\r
    super(config);\r
    this.low = config.low;\r
    this.high = config.high;\r
    this.optimum = config.optimum;\r
  }\r
}\r
`;export{o as default};
