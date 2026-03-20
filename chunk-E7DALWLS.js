import"./chunk-7DXB7J77.js";var t=`import { Component, EventEmitter, Output } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
\r
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FormFieldEventType, SubmitButton, TriggerAction, UserName } from '@preforms/ts';\r
import { of } from 'rxjs';\r
\r
@Component({\r
  selector: 'app-async-validate',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  providers: [\r
    NATIVE_FORM_ELEMENTS,\r
    {\r
      provide: DYNAMIC_FORM_FETCHER,\r
      useValue: (url: string) => {\r
        if (url.includes('/check-username/')) {\r
          const value = url.split('/').pop();\r
\r
          const errors = value === 'admin' ? { taken: { message: 'already taken' } } : null;\r
\r
          return of([{ errors, id: 'username' }]);\r
        }\r
\r
        return of([]);\r
      },\r
    },\r
  ],\r
})\r
export class AsyncValidationComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new UserName({\r
      triggers: [\r
        {\r
          on: FormFieldEventType.CHANGE,\r
          action: TriggerAction.ASYNC_VALIDATE,\r
          fetchUrl: '/api/check-username/$value',\r
        },\r
      ],\r
      required: true,\r
    }),\r
    new SubmitButton(),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{t as default};
