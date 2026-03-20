import"./chunk-7DXB7J77.js";var r=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { DYNAMIC_FORM_FETCHER, FIELD_ICON_TEMPLATES } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FieldIconEmojiComponent } from '@preforms/angular/native/fields/field-icon-emoji.component';\r
import {\r
  CheckboxField,\r
  ConfirmButton,\r
  Fieldset,\r
  FormDescription,\r
  FormDivider,\r
  FormElement,\r
  FormField,\r
  FormFieldOption,\r
  FormImage,\r
  FormRow,\r
  FormTitle,\r
  FormTitleLevel,\r
  NumberField,\r
  RadioField,\r
  SubmitButton,\r
  TextareaField,\r
} from '@preforms/ts';\r
import { Observable, of } from 'rxjs';\r
\r
@Component({\r
  selector: 'app-order-form-demo',\r
  template: \`<preforms-dynamic-form\r
    className="product-form"\r
    (submittedData)="logData($event)"\r
    [fields]="fields"\r
  /> \`,\r
  styleUrl: './order-form-demo.component.scss',\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: FIELD_ICON_TEMPLATES,\r
      useValue: FieldIconEmojiComponent,\r
    },\r
    {\r
      provide: DYNAMIC_FORM_FETCHER,\r
      useValue: (url: string): Observable<Partial<FormElement>[]> => {\r
        const params = new URLSearchParams(url.split('?')[1]);\r
\r
        const amount = Number(params.get('amount') ?? 1);\r
        const side = params.get('side');\r
\r
        const base = 9.34;\r
        const sides = { fries: 5, rice: 4.5 };\r
\r
        const price = (base + (sides[side as keyof typeof sides] ?? 0)) * amount;\r
\r
        return of([\r
          {\r
            id: 'order-form-submit-btn',\r
            label: \`Add $\${price.toFixed(2)}\`,\r
          },\r
        ]);\r
      },\r
    },\r
  ],\r
})\r
export class OrderFormDemoComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new NumberField({ key: 'id', value: 2316, hidden: true }),\r
    new FormImage({\r
      src: '/chickengarlic.jpg',\r
      width: '400px',\r
    }),\r
    new FormTitle('Garlic Knot Chicken Breasts'),\r
    new FormTitle('$9.34 \u{1F3F7}\uFE0F', FormTitleLevel.H2),\r
    new FormDescription('Tender chicken breast with garlic, rosemary, and a hint of lemon.'),\r
\r
    new Fieldset('Sides Dish', [\r
      new RadioField({\r
        key: 'side',\r
        options: [\r
          new FormFieldOption({ value: 'na', label: 'No Side', description: '$0.00' }),\r
          new FormFieldOption({ value: 'fries', label: 'Fries', description: '$5.00' }),\r
          new FormFieldOption({ value: 'rice', label: 'Rice', description: '$4.50' }),\r
        ],\r
        className: 'app-selection',\r
        required: true,\r
      }),\r
    ]),\r
\r
    new Fieldset('Cutlery', [\r
      new CheckboxField({\r
        key: 'cutlery',\r
        label: 'Add cutlery',\r
        className: 'app-selection',\r
      }),\r
    ]),\r
\r
    new TextareaField({\r
      key: 'notes',\r
      placeholder: 'it may not be possible to meetall requests',\r
    }),\r
\r
    new FormDivider({ className: 'form-end' }),\r
\r
    new FormRow({\r
      position: 'space-between',\r
      fields: [\r
        new NumberField({\r
          key: 'amount',\r
          label: '',\r
          value: 1,\r
          readonly: true,\r
          min: 1,\r
          max: 5,\r
          icons: [\r
            {\r
              name: '\u2795',\r
              side: 'left',\r
              action: 'increment',\r
            },\r
            {\r
              name: '\u2796',\r
              side: 'right',\r
              action: 'decrement',\r
            },\r
          ],\r
          className: 'amount-control',\r
        }),\r
        new SubmitButton({\r
          id: 'order-form-submit-btn',\r
          label: 'Add $9.34',\r
          className: 'primary',\r
          triggers: [\r
            {\r
              on: 'change',\r
              action: 'fetch',\r
              fetchUrl: '/api/calculate-price?amount={amount}&side={side}',\r
              sourceField: ['side', 'amount'],\r
              mode: 'patch',\r
            },\r
          ],\r
        }),\r
      ],\r
    }),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{r as default};
