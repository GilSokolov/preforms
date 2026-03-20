import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { TextField, InputField, OutputField, SubmitButton } from '@preforms/ts';

@Component({
  selector: 'app-reactive-validation-form',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class ReactiveValidationFormComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new TextField({
      key: 'username',
      required: true,
      minLength: 3,
      maxLength: 30,
      pattern: ['^[a-zA-Z0-9_]+$', 'letters, numbers, underscore only'],
      hint: '3–30 characters, no spaces.',
    }),
    new InputField({
      key: 'files',
      type: 'number',
      triggers: [
        {
          on: 'change',
          action: 'update_state',
          targetField: 'upload',
          applyState: { hidden: false },
          condition: { operator: 'gt', value: 0 },
        },
      ],
    }),
    new OutputField({
      key: 'calculatedTotal',
      calculation: 'Number(price)+Number(tax)',
      for: ['price', 'tax'],
    }),
    new SubmitButton('Save'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
