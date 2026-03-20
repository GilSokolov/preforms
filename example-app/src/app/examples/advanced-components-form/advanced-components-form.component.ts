import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { FieldArray, NumberField, DialogField, EmailField, SubmitButton } from '@preforms/ts';

@Component({
  selector: 'app-advanced-components-form',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
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
      fields: [new EmailField({ key: 'email' }), new SubmitButton('Save')],
    }),
    new SubmitButton('Save All'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
