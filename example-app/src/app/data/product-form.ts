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
  CheckboxField,
  RadioField,
  CheckboxFieldGroup,
  ImageField,
  FormImage,
  FormTitle,
  FormTitleLevel,
  FormDescription,
  Description,
  FieldButton,
  ConfirmButton,
  FormDivider,
} from '@preforms/ts';

const url =
  'https://www.simplyrecipes.com/thmb/qkRyHMXNtnytpTr9Jo7UPipJhT8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Garlic-Knot-Chicken-LEAD-2-7d7087b6f7df4b688eb31739c801733e.jpg';

export const productForm = [
  new NumberField({ key: 'id', value: 2316, hidden: true }),
  new FormImage({
    src: '/chickengarlic.jpg',
    width: '400px',
  }),
  new FormTitle('Garlic Knot Chicken Breasts'),
  new FormTitle('$9.34 🏷️', FormTitleLevel.H2),
  new FormDescription('Tender chicken breast with garlic, rosemary, and a hint of lemon.'),

  new Fieldset('Sides Dish', [
    new RadioField({
      key: 'sideDish',
      label: '',
      options: [
        new FormFieldOption({ value: 'fries', label: 'Fries', description: '$5.00' }),
        new FormFieldOption({ value: 'rice', label: 'Rice', description: '$4.50' }),
      ],
      className: 'app-selection',
      required: true,
    }),
  ]),

  new Fieldset('Cutlery', [
    new CheckboxField({
      key: 'cutlery',
      label: 'Add cutlery',
      className: 'app-selection',
    }),
  ]),

  new TextareaField({
    key: 'notes',
    placeholder: 'it may not be possible to meetall requests',
  }),

  new FormDivider({ className: 'form-end' }),

  new FormRow({
    position: 'space-between',
    fields: [
      new NumberField({
        key: 'amount',
        label: '',
        value: 1,
        readonly: true,
        icons: [
          {
            name: 'add',
            side: 'left',
            expressions: ['field.value++'],
          },
          {
            name: 'remove',
            side: 'right',
            expressions: ['field.value <= 1 ? null : --field.value'],
          },
        ],
        className: 'amount-control',
      }),
      new ConfirmButton({ label: 'add to cart', type: 'submit', className: 'primary' }),
    ],
  }),
];
