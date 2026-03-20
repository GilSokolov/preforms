import"./chunk-7DXB7J77.js";var o=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FieldGroup, TextField } from '@preforms/ts';\r
\r
import { WizardFieldComponent } from './wizard';\r
import { WizardField } from './wizard.field';\r
\r
@Component({\r
  selector: 'app-extensible-form',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS, WizardFieldComponent],\r
})\r
export class ExtensibleFormWizardComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new WizardField({\r
      fields: [\r
        new FieldGroup({\r
          key: 'profile',\r
          description: 'Fill out your name',\r
          fields: [\r
            new TextField({\r
              key: 'name',\r
              placeholder: 'Last name, First name',\r
              required: true,\r
            }),\r
          ],\r
        }),\r
        new FieldGroup({\r
          key: 'shipping',\r
          description: 'Fill out your address',\r
          fields: [\r
            new TextField({\r
              key: 'address',\r
              placeholder: 'Ex. 1 Main St, New York, NY',\r
              required: true,\r
            }),\r
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
`;export{o as default};
