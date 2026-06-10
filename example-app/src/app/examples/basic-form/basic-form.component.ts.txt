import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import { EmailField, SubmitButton, TextField } from '@preforms/ts';

@Component({
  selector: 'app-basic-form',
  template: ` <preforms (submittedData)="logData($event)" [fields]="fields" /> `,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class BasicFormComponent {
  @Output() formChange = new EventEmitter<any>();
  fields = [
    new TextField({
      key: 'name',
      label: 'Full name',
      placeholder: 'John Doe',
      required: true,
    }),

    new EmailField({
      placeholder: 'you@example.com',
    }),

    new SubmitButton('Save'),
  ];
  logData(data: any) {
    this.formChange.emit(data);
  }
}
