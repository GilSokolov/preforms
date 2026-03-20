import"./chunk-7DXB7J77.js";var r=`import { FieldGroup, FieldWrapper, FieldWrapperConfig } from '@preforms/ts';\r
\r
export interface WizardFieldConfig extends FieldWrapperConfig {\r
  fields: FieldGroup[];\r
}\r
\r
export class WizardField extends FieldWrapper {\r
  override component = 'wizard';\r
  override fields: FieldGroup[];\r
\r
  constructor(config: WizardFieldConfig) {\r
    super(config);\r
    this.fields = config.fields;\r
  }\r
}\r
`;export{r as default};
