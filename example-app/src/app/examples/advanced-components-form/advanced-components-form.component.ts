import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import { FieldArray, NumberField, DialogField, Email, SubmitButton } from '@preforms/ts';

@Component({
  selector: 'app-advanced-components-form',
  template: `<preforms (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class AdvancedComponentsFormComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new FieldArray({
      key: 'items',
      minItems: 1,
      maxItems: 3,
      addButton: true,
      fields: [new NumberField({ key: 'price', min: 5 })],
      aggregates: [{ action: 'sum', field: 'price', operator: 'lte', value: 1000 }],
    }),
    new DialogField({
      key: 'newsletter',
      id: 'newsletter-dialog',
      fields: [new Email({ key: 'email' }), new SubmitButton('Save')],
    }),
    new SubmitButton('Save All'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
