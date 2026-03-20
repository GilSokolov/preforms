import"./chunk-7DXB7J77.js";var e=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { SubmitButton } from '@preforms/ts';\r
import { EditorField } from '../../custom-form-fields/editor/editor';\r
\r
@Component({\r
  selector: 'app-lazy-loading',\r
  template: \` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> \`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class LazyLoadingFieldsComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
  fields = [new EditorField(), new SubmitButton('Save')];\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{e as default};
