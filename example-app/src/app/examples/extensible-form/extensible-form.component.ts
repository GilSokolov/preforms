import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { PasswordField, SubmitButton } from '@preforms/ts';
import { PasswordStrengthField } from './PasswordStrengthField';
import { PasswordStenghtFieldComponent } from './password-strength';

@Component({
  selector: 'app-extensible-form',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS, PasswordStenghtFieldComponent],
})
export class ExtensibleFormComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new PasswordField({ key: 'password', hint: 'At least 8 characters' }),
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
