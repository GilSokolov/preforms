import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import { Password, SubmitButton } from '@preforms/ts';
import { PasswordStrengthField } from './PasswordStrengthField';
import { PasswordStenghtFieldComponent } from './password-strength';

@Component({
  selector: 'app-extensible-form',
  template: `<preforms (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS, PasswordStenghtFieldComponent],
})
export class ExtensibleFormComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new Password({ key: 'password', hint: 'At least 8 characters' }),
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
