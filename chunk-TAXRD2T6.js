import"./chunk-7DXB7J77.js";var o=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { PasswordField, SubmitButton } from '@preforms/ts';\r
import { PasswordStrengthField } from './PasswordStrengthField';\r
import { PasswordStenghtFieldComponent } from './password-strength';\r
\r
@Component({\r
  selector: 'app-extensible-form',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS, PasswordStenghtFieldComponent],\r
})\r
export class ExtensibleFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new PasswordField({ key: 'password', hint: 'At least 8 characters' }),\r
    new PasswordStrengthField({\r
      key: 'passwordStrength',\r
      min: 0,\r
      max: 4,\r
      low: 1,\r
      high: 4,\r
      optimum: 4,\r
    }),\r
    new SubmitButton('Save'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{o as default};
