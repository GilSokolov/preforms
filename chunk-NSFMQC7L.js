import"./chunk-7DXB7J77.js";var o=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  TextField,\r
  EmailField,\r
  PasswordField,\r
  NumberField,\r
  SelectField,\r
  FormFieldOption,\r
  CheckboxFieldGroup,\r
  InputField,\r
  TextareaField,\r
  OutputField,\r
  SubmitButton,\r
} from '@preforms/ts';\r
import { PasswordStrengthField } from 'src/app/custom-form-fields/PasswordStrengthField';\r
\r
@Component({\r
  selector: 'app-form-fields',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class FormFieldsComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new TextField({ key: 'username', placeholder: 'Username', required: true }),\r
    new EmailField({ key: 'email', placeholder: 'you@example.com' }),\r
    new PasswordField({\r
      key: 'password',\r
      hint: 'At least 8 characters',\r
      icons: [{ name: '\u{1F3B2}', side: 'left', action: 'generatePassword' }],\r
    }),\r
    new NumberField({ key: 'age', min: 1, max: 120 }),\r
    new SelectField({\r
      key: 'language',\r
      options: [\r
        new FormFieldOption({ value: 'en', label: 'English' }),\r
        new FormFieldOption({ value: 'es', label: 'Spanish' }),\r
      ],\r
    }),\r
    new CheckboxFieldGroup('notifications', ['email', 'sms'], ['email']),\r
    new InputField({ type: 'range', key: 'volume', min: 0, max: 100 }),\r
    new InputField({ type: 'file', key: 'upload' }),\r
    new TextareaField({ key: 'bio', placeholder: 'Short bio', maxLength: 280 }),\r
    new OutputField({ key: 'total', calculation: 'price + tax', for: ['price', 'tax'] }),\r
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
