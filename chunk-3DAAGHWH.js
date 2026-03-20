import"./chunk-7DXB7J77.js";var o=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { SubmitButton, TextField } from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-validation-form',\r
  template: \` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> \`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class ValidationFormComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
  fields = [\r
    new TextField({\r
      key: 'username',\r
      hint: '3\u201330 characters. No spaces.',\r
      minLength: 3,\r
      maxLength: 30,\r
      pattern: ['^[a-zA-Z0-9_]+$', 'letters, numbers, underscore only'],\r
      required: true,\r
    }),\r
\r
    new SubmitButton('Save'),\r
  ];\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{o as default};
