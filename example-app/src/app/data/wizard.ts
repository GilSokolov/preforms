import { FieldGroup, TextField } from '@preforms/ts';
import { WizardField } from '../custom-form-fields/wizard.field';

export const wizard = [
  new WizardField({
    fields: [
      new FieldGroup({
        key: 'profile',
        description: 'Fill out your name',
        fields: [
          new TextField({
            key: 'name',
            placeholder: 'Last name, First name',
            required: true,
          }),
        ],
      }),
      new FieldGroup({
        key: 'shipping',
        description: 'Fill out your address',
        fields: [
          new TextField({
            key: 'address',
            placeholder: 'Ex. 1 Main St, New York, NY',
            required: true,
          }),
        ],
      }),
    ],
  }),
];
