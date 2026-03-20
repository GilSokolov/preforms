import {
  Fieldset,
  TextField,
  EmailField,
  PasswordField,
  TextareaField,
  FormGrid,
  InputField,
  SelectField,
  FormFieldOption,
  NumberField,
  DetailsField,
  DialogField,
  FormRow,
  FormField,
  OutputField,
  Name,
  SubmitButton,
  CloseDialogButton,
  FieldArray,
  FieldGroup,
  DateRangeField,
  DateField,
  FormTitle,
  FormTitleLevel,
  Description,
  FormDescription,
  FormDivider,
} from '@preforms/ts';

export const material = [
  new SelectField({
    key: 'rooms',
    options: ['king', 'queen', 'junior'],
    required: true,
    triggers: [
      {
        on: 'change',
        action: 'update_state',
        applyState: {
          hidden: true,
        },
        targetField: [
          'king-title',
          'queen-title',
          'junior-title',
          'king-description',
          'queen-description',
          'junior-description',
        ],
      },
      {
        on: 'change',
        action: 'update_state',
        applyState: {
          hidden: false,
        },
        targetField: ['$value-title', '$value-description'],
      },
    ],
  }),

  new FormDivider({ label: 'Room' }),

  new FormTitle({ value: 'King Room', hidden: true, id: 'king-title' }, FormTitleLevel.H2),
  new FormTitle({ value: 'Queen Room', hidden: true, id: 'queen-title' }, FormTitleLevel.H2),
  new FormTitle({ value: 'Junior Room', hidden: true, id: 'junior-title' }, FormTitleLevel.H2),
  new FormDescription({
    value: `A majestic retreat designed for travelers who appreciate space and elegance. The King Room features a sprawling bed fit for royalty, panoramic city views, and an oversized lounge area perfect for relaxing after a day of adventure—or ruling your own empire. Guests often remark that the minibar feels more like a treasure chest than a snack station.`,
    hidden: true,
    id: 'king-description',
  }),
  new FormDescription({
    value:
      'Comfort meets sophistication in the Queen Room. Cozy yet stylish, it boasts a plush queen-sized bed, ambient lighting, and a curated collection of faux-artifacts that make every stay Instagram-worthy. Ideal for solo travelers or couples who want a touch of luxury without the fuss of grandeur.',
    hidden: true,
    id: 'queen-description',
  }),
  new FormDescription({
    value:
      'The Junior Room is small in size but big in personality. With smart, space-saving furniture and quirky design touches, it’s perfect for adventurers who want efficiency without compromising style. Think of it as a boutique hideaway where every corner has a story—some of them even self-writing.',
    hidden: true,
    id: 'junior-description',
  }),
];
