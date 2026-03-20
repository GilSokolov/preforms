import { Component, EventEmitter, Output } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';

import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core/tokens';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { FormFieldEventType, SubmitButton, TriggerAction, UserName } from '@preforms/ts';
import { of } from 'rxjs';

@Component({
  selector: 'app-async-validate',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  providers: [
    NATIVE_FORM_ELEMENTS,
    {
      provide: DYNAMIC_FORM_FETCHER,
      useValue: (url: string) => {
        if (url.includes('/check-username/')) {
          const value = url.split('/').pop();

          const errors = value === 'admin' ? { taken: { message: 'already taken' } } : null;

          return of([{ errors, id: 'username' }]);
        }

        return of([]);
      },
    },
  ],
})
export class AsyncValidationComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new UserName({
      triggers: [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.ASYNC_VALIDATE,
          fetchUrl: '/api/check-username/$value',
        },
      ],
      required: true,
    }),
    new SubmitButton(),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
