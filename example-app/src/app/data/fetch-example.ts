import { InputField, Name, PasswordField } from '@preforms/ts';

export const fetchForm = [
  new Name({
    order: 3,
    key: 'username',
    value: 'test',
    required: true,
    triggers: [
      {
        on: 'change',
        action: 'fetch',
        fetchUrl: '/api/check-username/$value',
        mode: 'patch',
      },
    ],
  }),
  new InputField({
    order: 1,
    type: 'checkbox',
    key: 'terms',
    label: 'Agree to terms',
    triggers: [
      {
        on: 'checked',
        action: 'fetch',
        fetchUrl: '/api/terms/$value',
        mode: 'merge',
        once: true,
      },
    ],
  }),
];
