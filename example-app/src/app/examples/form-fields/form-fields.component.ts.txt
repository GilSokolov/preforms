import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import {
  CheckboxGroupField,
  EmailField,
  FormFieldOption,
  InputField,
  NumberField,
  PasswordField,
  SelectField,
  SubmitButton,
  TextareaField,
  TextField,
} from '@preforms/ts';

@Component({
  selector: 'app-form-fields',
  template: `<preforms (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [Preforms],
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
    }),
    new NumberField({ key: 'age', min: 1, max: 120 }),
    new SelectField({
      key: 'language',
      options: [
        new FormFieldOption({ value: 'en', label: 'English' }),
        new FormFieldOption({ value: 'es', label: 'Spanish' }),
      ],
    }),
    new CheckboxGroupField('notifications', ['email', 'sms'], ['email']),
    new InputField({ type: 'range', key: 'volume', min: 0, max: 100 }),
    new InputField({ type: 'file', key: 'upload' }),
    new TextareaField({ key: 'bio', placeholder: 'Short bio', maxLength: 280 }),
    new SubmitButton('Save'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
