import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { FieldGroup, TextField } from '@preforms/ts';

import { WizardFieldComponent } from './wizard';
import { WizardField } from './wizard.field';

@Component({
  selector: 'app-extensible-form',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS, WizardFieldComponent],
})
export class ExtensibleFormWizardComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new WizardField({
      fields: [
        new FieldGroup({
          key: 'profile',
          description: 'Fill out your name',
          fields: [
            new TextField({
              key: 'name',
              placeholder: 'Last name, First name',
              required: true,
            }),
          ],
        }),
        new FieldGroup({
          key: 'shipping',
          description: 'Fill out your address',
          fields: [
            new TextField({
              key: 'address',
              placeholder: 'Ex. 1 Main St, New York, NY',
              required: true,
            }),
          ],
        }),
      ],
    }),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
