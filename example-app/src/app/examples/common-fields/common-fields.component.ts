import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import {
  Address,
  City,
  ConfirmButton,
  Country,
  CurrencyField,
  DateOfBirth,
  Description,
  EmailField,
  Fieldset,
  FirstName,
  FormRow,
  FullName,
  Gender,
  LastName,
  MiddleName,
  Name,
  PasswordField,
  PhoneNumber,
  PostalCode,
  ResetButton,
  State,
  Street,
  SubmitButton,
  UserName,
} from '@preforms/ts';

@Component({
  selector: 'app-common-fields',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class CommonFieldsComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new FormRow([new FirstName(), new MiddleName(), new LastName()]),

    new FullName(),
    new Name(),
    new UserName(),
    new EmailField(),
    new PasswordField(),
    new PhoneNumber(),
    new DateOfBirth(),
    new Gender(),
    new Fieldset({
      label: 'Address',
      fields: [new Address()],
    }),
    new Fieldset({
      label: 'Address composed',
      fields: [new Street(), new City(), new State(), new PostalCode(), new Country()],
    }),
    new CurrencyField(),
    new Description(),

    new FormRow([new SubmitButton(), new ResetButton(), new ConfirmButton()]),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
