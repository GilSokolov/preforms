import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import {
  DateField,
  EmailField,
  NumberField,
  PasswordField,
  SubmitButton,
  TriggerAction,
} from '@preforms/ts';

@Component({
  selector: 'app-cross-validation-form',
  template: `<preforms (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class CrossValidationFormComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new PasswordField({
      minLength: 8,
      hint: 'At least 8 characters',
    }),

    new PasswordField({
      key: 'confirmPassword',
      label: 'Confirm password',
      triggers: [
        {
          on: 'input',
          do: TriggerAction.VALIDATE,
          validation: {
            operator: 'eq',
            compareTo: 'password',
            message: 'must match password',
          },
        },
      ],
    }),

    new EmailField({
      placeholder: 'you@example.com',
    }),

    new EmailField({
      key: 'confirmEmail',
      label: 'Confirm Email',
      triggers: [
        {
          on: 'input',
          do: TriggerAction.VALIDATE,
          validation: {
            operator: 'eq',
            compareTo: 'email',
            message: 'must match email',
          },
        },
      ],
    }),

    new DateField({
      key: 'startDate',
      label: 'Start date',
    }),

    new DateField({
      key: 'endDate',
      label: 'End date',
      triggers: [
        {
          on: 'change',
          do: TriggerAction.VALIDATE,
          validation: {
            operator: 'gt',
            compareTo: 'startDate',
            message: 'must be after start date',
          },
          source: ['startDate', 'endDate'],
        },
      ],
    }),

    new NumberField({
      key: 'orderAmount',
      label: 'Order amount ($)',
      min: 0,
    }),

    new NumberField({
      key: 'discount',
      label: 'Discount ($)',
      triggers: [
        {
          on: 'blur',
          do: TriggerAction.VALIDATE,
          validation: {
            operator: 'lt',
            compareTo: 'orderAmount',
            message: 'cannot exceed order amount',
          },
          source: ['orderAmount', 'discount'],
        },
      ],
    }),

    new SubmitButton('Create Account'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
