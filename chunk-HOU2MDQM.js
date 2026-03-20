import"./chunk-7DXB7J77.js";var n=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  Address,\r
  City,\r
  ConfirmButton,\r
  Country,\r
  CurrencyField,\r
  DateOfBirth,\r
  Description,\r
  EmailField,\r
  FirstName,\r
  FullName,\r
  Gender,\r
  LastName,\r
  MiddleName,\r
  Name,\r
  PasswordField,\r
  PhoneNumber,\r
  PostalCode,\r
  ResetButton,\r
  State,\r
  Street,\r
  SubmitButton,\r
  UserName,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-common-fields',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class CommonFieldsComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new FirstName(),\r
    new MiddleName(),\r
    new LastName(),\r
    new FullName(),\r
    new Name(),\r
    new EmailField(),\r
    new UserName(),\r
    new PasswordField(),\r
    new PhoneNumber(),\r
    new DateOfBirth(),\r
    new Gender(),\r
    new Address(),\r
    new Street(),\r
    new City(),\r
    new State(),\r
    new PostalCode(),\r
    new Country(),\r
    new CurrencyField(),\r
    new Description(),\r
    new SubmitButton(),\r
    new ResetButton(),\r
    new ConfirmButton(),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{n as default};
