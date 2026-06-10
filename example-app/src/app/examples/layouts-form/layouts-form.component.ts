import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import {
  Fieldset,
  TextField,
  FormGrid,
  DetailsField,
  InputField,
  SubmitButton,
} from '@preforms/ts';

@Component({
  selector: 'app-layouts-form',
  template: `<preforms (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class LayoutsFormComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new Fieldset({
      key: 'account',
      fields: [
        new TextField({ key: 'username', placeholder: 'Username' }),
        new TextField({ key: 'email', placeholder: 'Email' }),
      ],
    }),
    new FormGrid(
      [
        new TextField({ key: 'city', placeholder: 'City' }),
        new TextField({ key: 'country', placeholder: 'Country' }),
      ],
      { columns: '1fr 1fr' },
    ),
    new DetailsField({
      label: 'Advanced Settings',
      fields: [
        new InputField({ type: 'checkbox', key: 'advancedFlag' }),
        new InputField({ type: 'text', key: 'advancedValue', placeholder: 'Optional' }),
      ],
    }),
    new SubmitButton('Save'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
