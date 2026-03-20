import { Name } from '@preforms/ts';

export const fetchData = [
  new Name({
    errors: {
      taken: {
        hint: 'Alreadt taken',
      },
    },
  }),
];
