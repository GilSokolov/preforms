import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import {
  TextField,
  EmailField,
  PasswordField,
  NumberField,
  SelectField,
  FormFieldOption,
  CheckboxFieldGroup,
  InputField,
  TextareaField,
  OutputField,
  SubmitButton,
} from '@preforms/ts';
import { PasswordStrengthField } from 'src/app/custom-form-fields/PasswordStrengthField';

@Component({
  selector: 'app-form-fields',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class FormFieldsComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new TextField({ key: 'username', placeholder: 'Username', required: true }),
    new EmailField({ key: 'email', placeholder: 'you@example.com' }),
    new PasswordField({
      key: 'password',
      hint: 'At least 8 characters',
      icons: [{ name: '🎲', side: 'left', action: 'generatePassword' }],
    }),
    new NumberField({ key: 'age', min: 1, max: 120 }),
    new SelectField({
      key: 'language',
      options: [
        new FormFieldOption({ value: 'en', label: 'English' }),
        new FormFieldOption({ value: 'es', label: 'Spanish' }),
      ],
    }),
    new CheckboxFieldGroup('notifications', ['email', 'sms'], ['email']),
    new InputField({ type: 'range', key: 'volume', min: 0, max: 100 }),
    new InputField({ type: 'file', key: 'upload' }),
    new TextareaField({ key: 'bio', placeholder: 'Short bio', maxLength: 280 }),
    new OutputField({ key: 'total', calculation: 'price + tax', for: ['price', 'tax'] }),
    new PasswordStrengthField({
      key: 'passwordStrength',
      min: 0,
      max: 4,
      low: 1,
      high: 4,
      optimum: 4,
    }),
    new SubmitButton('Save'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
