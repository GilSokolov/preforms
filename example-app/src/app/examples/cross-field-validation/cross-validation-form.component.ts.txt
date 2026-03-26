import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
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
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class CrossValidationFormComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new PasswordField({
      minLength: 4,
      hint: 'At least 8 characters',
    }),

    new PasswordField({
      key: 'confirmPassword',
      label: 'Confirm password',
      triggers: [
        {
          on: 'input',
          action: TriggerAction.VALIDATE,
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
          action: TriggerAction.VALIDATE,
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
          action: TriggerAction.VALIDATE,
          validation: {
            operator: 'gt',
            compareTo: 'startDate',
            message: 'must be after start date',
          },
          sourceField: ['startDate', 'endDate'],
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
          action: TriggerAction.VALIDATE,
          validation: {
            operator: 'lt',
            compareTo: 'orderAmount',
            message: 'cannot exceed order amount',
          },
          sourceField: ['orderAmount', 'discount'],
        },
      ],
    }),

    new SubmitButton('Create Account'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
