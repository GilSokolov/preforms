import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { SubmitButton, TextField } from '@preforms/ts';

@Component({
  selector: 'app-validation-form',
  template: ` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> `,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class ValidationFormComponent {
  @Output() formChange = new EventEmitter<any>();
  fields = [
    new TextField({
      key: 'username',
      hint: '3–30 characters. No spaces.',
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
