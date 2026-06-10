import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import { SubmitButton, TextField } from '@preforms/ts';

@Component({
  selector: 'app-validation-form',
  template: ` <preforms (submittedData)="logData($event)" [fields]="fields" /> `,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class ValidationFormComponent {
  @Output() formChange = new EventEmitter<any>();
  fields = [
    new TextField({
      key: 'username',
      hint: '3-30 characters. No spaces.',
      minLength: 3,
      maxLength: 30,
      pattern: ['^[a-zA-Z0-9_]+$', 'letters, numbers, underscore only'],
      required: true,
    }),

    new SubmitButton('Save'),
  ];
  logData(data: any) {
    this.formChange.emit(data);
  }
}
