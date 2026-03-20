import"./chunk-7DXB7J77.js";var r=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  FormElement,\r
  FormFieldEventType,\r
  NumberField,\r
  SelectField,\r
  SubmitButton,\r
  TextField,\r
  TriggerAction,\r
} from '@preforms/ts';\r
\r
import { Observable, of } from 'rxjs';\r
\r
@Component({\r
  selector: 'app-dynamic-form-fetch',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: DYNAMIC_FORM_FETCHER,\r
      useValue: (url: string): Observable<Partial<FormElement>[]> => {\r
        // simulate API returning fields based on selection\r
        const selection = url.split('/').pop();\r
\r
        const selectField = new SelectField({\r
          key: 'product',\r
          label: 'Select Product',\r
          value: selection,\r
          options: [\r
            { label: 'Product A', value: 'productA' },\r
            { label: 'Product B', value: 'productB' },\r
          ],\r
          triggers: [\r
            {\r
              on: FormFieldEventType.CHANGE,\r
              action: TriggerAction.FETCH,\r
              fetchUrl: '/api/forms/$value',\r
              mode: 'replace', // replace the current form with fetched fields\r
            },\r
          ],\r
        });\r
\r
        if (selection === 'productA') {\r
          return of([\r
            selectField,\r
            new TextField({\r
              key: 'productA_feature',\r
              label: 'Feature A',\r
              placeholder: 'Enter feature A',\r
              required: true,\r
            }),\r
            new NumberField({\r
              key: 'productA_quantity',\r
              label: 'Quantity',\r
              min: 1,\r
              value: 1,\r
            }),\r
          ]);\r
        }\r
\r
        if (selection === 'productB') {\r
          return of([\r
            selectField,\r
            new TextField({\r
              key: 'productB_color',\r
              label: 'Color',\r
              placeholder: 'Enter color',\r
              required: true,\r
            }),\r
            new NumberField({\r
              key: 'productB_units',\r
              label: 'Units',\r
              min: 1,\r
              value: 1,\r
            }),\r
          ]);\r
        }\r
\r
        return of([]);\r
      },\r
    },\r
  ],\r
})\r
export class DynamicFormFetchComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new SelectField({\r
      key: 'product',\r
      label: 'Select Product',\r
      options: [\r
        { label: 'Product A', value: 'productA' },\r
        { label: 'Product B', value: 'productB' },\r
      ],\r
      triggers: [\r
        {\r
          on: FormFieldEventType.CHANGE,\r
          action: TriggerAction.FETCH,\r
          fetchUrl: '/api/forms/$value',\r
          mode: 'replace', // replace the current form with fetched fields\r
        },\r
      ],\r
    }),\r
    new TextField({\r
      key: 'productA_feature',\r
      label: 'Feature A',\r
      placeholder: 'Enter feature A',\r
      required: true,\r
    }),\r
    new NumberField({\r
      key: 'productA_quantity',\r
      label: 'Quantity',\r
      min: 1,\r
      value: 1,\r
    }),\r
    new SubmitButton(),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{r as default};
