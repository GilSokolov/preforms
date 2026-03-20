import"./chunk-7DXB7J77.js";var o=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { FIELD_ICON_TEMPLATES } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FieldIconEmojiComponent } from '@preforms/angular/native/fields/field-icon-emoji.component';\r
import {\r
  DialogField,\r
  FormDescription,\r
  FormList,\r
  FormTitle,\r
  FormTitleLevel,\r
  NumberField,\r
  PasswordField,\r
  SubmitButton,\r
  TextField,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-icons-form',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: FIELD_ICON_TEMPLATES,\r
      useValue: FieldIconEmojiComponent,\r
    },\r
  ],\r
})\r
export class IconsFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new PasswordField({\r
      hint: 'At least 8 characters. Use a mix of letters and numbers.',\r
      minLength: 8,\r
      autocomplete: 'off',\r
      icons: [\r
        {\r
          name: '\u{1F3B2}',\r
          side: 'left',\r
          action: 'generatePassword',\r
          title: 'Generate a random password',\r
        },\r
        {\r
          name: '\u{1F511}',\r
          side: 'left',\r
          expressions: [\r
            "field.type = field.type === 'text' ? 'password' : 'text'",\r
            "icon.name = field.type === 'text' ? '\u{1F441}\uFE0F' : '\u{1F511}'",\r
          ],\r
        },\r
      ],\r
    }),\r
\r
    new NumberField({\r
      key: 'amount',\r
      value: 0,\r
      min: 0,\r
      icons: [\r
        {\r
          name: '\u2795',\r
          side: 'left',\r
          expressions: ['field.value++'],\r
        },\r
        {\r
          name: '\u2796',\r
          side: 'right',\r
          expressions: ['field.value--'],\r
        },\r
      ],\r
    }),\r
\r
    new TextField({\r
      key: 'search',\r
      icons: [\r
        {\r
          name: '\u274C',\r
          side: 'left',\r
          expressions: ['field.value = null'],\r
          visible: 'field.value',\r
        },\r
      ],\r
    }),\r
\r
    new TextField({\r
      key: 'SKU',\r
      placeholder: 'Enter unique product SKU',\r
      icons: [\r
        {\r
          name: '\u2139\uFE0F',\r
          side: 'left',\r
          emit: 'custom:skuInfoOpen',\r
        },\r
      ],\r
    }),\r
\r
    new DialogField({\r
      key: 'sku-info',\r
      disabled: true,\r
      closeBtn: true,\r
      width: '400px',\r
      fields: [\r
        new FormTitle('What is SKU?', FormTitleLevel.H2),\r
        new FormDescription(\r
          \`A SKU is a unique identifier for each product in your inventory. \r
           It helps you track stock, manage orders, and avoid duplicate listings.\`,\r
        ),\r
        new FormTitle('Tips for creating SKUs:', FormTitleLevel.H3),\r
        new FormList([\r
          'Keep it short and consistent (e.g., EB-AP-2026)',\r
          'Avoid spaces or special characters',\r
          'Use a pattern that reflects product type or brand',\r
        ]),\r
      ],\r
      triggers: [\r
        {\r
          on: 'custom:skuInfoOpen',\r
          action: 'update_state',\r
          applyState: { disabled: false },\r
          sourceField: 'SKU',\r
        },\r
      ],\r
    }),\r
\r
    new TextField({\r
      key: 'name',\r
      icons: [\r
        {\r
          name: '\u{1F524}',\r
          side: 'right',\r
          action: 'uppercase', // custom action injected via token\r
          title: 'Uppercase text',\r
        },\r
      ],\r
    }),\r
\r
    new SubmitButton(),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{o as default};
