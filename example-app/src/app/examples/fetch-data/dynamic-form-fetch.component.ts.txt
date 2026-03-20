import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import {
  FormElement,
  FormFieldEventType,
  NumberField,
  SelectField,
  SubmitButton,
  TextField,
  TriggerAction,
} from '@preforms/ts';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dynamic-form-fetch',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [
    NATIVE_FORM_ELEMENTS,
    {
      provide: DYNAMIC_FORM_FETCHER,
      useValue: (url: string): Observable<Partial<FormElement>[]> => {
        // simulate API returning fields based on selection
        const selection = url.split('/').pop();

        const selectField = new SelectField({
          key: 'product',
          label: 'Select Product',
          value: selection,
          options: [
            { label: 'Product A', value: 'productA' },
            { label: 'Product B', value: 'productB' },
          ],
          triggers: [
            {
              on: FormFieldEventType.CHANGE,
              action: TriggerAction.FETCH,
              fetchUrl: '/api/forms/$value',
              mode: 'replace', // replace the current form with fetched fields
            },
          ],
        });

        if (selection === 'productA') {
          return of([
            selectField,
            new TextField({
              key: 'productA_feature',
              label: 'Feature A',
              placeholder: 'Enter feature A',
              required: true,
            }),
            new NumberField({
              key: 'productA_quantity',
              label: 'Quantity',
              min: 1,
              value: 1,
            }),
          ]);
        }

        if (selection === 'productB') {
          return of([
            selectField,
            new TextField({
              key: 'productB_color',
              label: 'Color',
              placeholder: 'Enter color',
              required: true,
            }),
            new NumberField({
              key: 'productB_units',
              label: 'Units',
              min: 1,
              value: 1,
            }),
          ]);
        }

        return of([]);
      },
    },
  ],
})
export class DynamicFormFetchComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new SelectField({
      key: 'product',
      label: 'Select Product',
      options: [
        { label: 'Product A', value: 'productA' },
        { label: 'Product B', value: 'productB' },
      ],
      triggers: [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.FETCH,
          fetchUrl: '/api/forms/$value',
          mode: 'replace', // replace the current form with fetched fields
        },
      ],
    }),
    new TextField({
      key: 'productA_feature',
      label: 'Feature A',
      placeholder: 'Enter feature A',
      required: true,
    }),
    new NumberField({
      key: 'productA_quantity',
      label: 'Quantity',
      min: 1,
      value: 1,
    }),
    new SubmitButton(),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
