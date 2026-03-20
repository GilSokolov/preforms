import"./chunk-7DXB7J77.js";var o=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  PasswordField,\r
  TriggerAction,\r
  TextField,\r
  InputField,\r
  NumberField,\r
  SubmitButton,\r
  EmailField,\r
  DateField,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-cross-validation-form',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class CrossValidationFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    // ------------------------\r
    // PASSWORD CONFIRMATION\r
    // ------------------------\r
    new PasswordField({\r
      minLength: 8,\r
      hint: 'At least 8 characters',\r
    }),\r
\r
    new PasswordField({\r
      key: 'confirmPassword',\r
      label: 'Confirm password',\r
      triggers: [\r
        {\r
          on: 'input',\r
          action: TriggerAction.VALIDATE,\r
          validation: {\r
            operator: 'eq',\r
            compareTo: 'password',\r
            message: 'must match password',\r
          },\r
        },\r
      ],\r
    }),\r
\r
    // ------------------------\r
    // EMAIL CONFIRMATION\r
    // ------------------------\r
    new EmailField({\r
      placeholder: 'you@example.com',\r
    }),\r
\r
    new EmailField({\r
      key: 'confirmEmail',\r
      label: 'Confirm Email',\r
      triggers: [\r
        {\r
          on: 'input',\r
          action: TriggerAction.VALIDATE,\r
          validation: {\r
            operator: 'eq',\r
            compareTo: 'email',\r
            message: 'must match email',\r
          },\r
        },\r
      ],\r
    }),\r
\r
    // ------------------------\r
    // DATE RANGE VALIDATION\r
    // ------------------------\r
    new DateField({\r
      key: 'startDate',\r
      label: 'Start date',\r
    }),\r
\r
    new DateField({\r
      key: 'endDate',\r
      label: 'End date',\r
      triggers: [\r
        {\r
          on: 'change',\r
          action: TriggerAction.VALIDATE,\r
          validation: {\r
            operator: 'gt',\r
            compareTo: 'startDate',\r
            message: 'must be after start date',\r
          },\r
          sourceField: ['startDate', 'endDate'],\r
        },\r
      ],\r
    }),\r
\r
    // ------------------------\r
    // MINIMUM ORDER VALIDATION\r
    // ------------------------\r
    new NumberField({\r
      key: 'orderAmount',\r
      label: 'Order amount ($)',\r
      min: 0,\r
    }),\r
\r
    new NumberField({\r
      key: 'discount',\r
      label: 'Discount ($)',\r
      triggers: [\r
        {\r
          on: 'blur',\r
          action: TriggerAction.VALIDATE,\r
          validation: {\r
            operator: 'lt',\r
            compareTo: 'orderAmount',\r
            message: 'cannot exceed order amount',\r
          },\r
          sourceField: ['orderAmount', 'discount'],\r
        },\r
      ],\r
    }),\r
\r
    new SubmitButton('Create Account'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{o as default};
