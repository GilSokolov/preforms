import"./chunk-7DXB7J77.js";var t=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { EmailField, SubmitButton, TextField } from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-basic-form',\r
  template: \` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> \`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class BasicFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
  fields = [\r
    new TextField({\r
      key: 'name',\r
      label: 'Full name',\r
      placeholder: 'John Doe',\r
      required: true,\r
    }),\r
\r
    new EmailField({\r
      placeholder: 'you@example.com',\r
    }),\r
\r
    new SubmitButton('Save'),\r
  ];\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{t as default};
