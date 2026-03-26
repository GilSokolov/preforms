// import {
//   Fieldset,
//   TextField,
//   EmailField,
//   PasswordField,
//   TextareaField,
//   FormGrid,
//   InputField,
//   SelectField,
//   FormFieldOption,
//   NumberField,
//   DetailsField,
//   DialogField,
//   FormRow,
//   FormField,
//   OutputField,
//   Name,
//   SubmitButton,
//   CloseDialogButton,
//   FieldArray,
//   CheckboxGroupField,
//   FieldButton,
//   Description,
//   FormDescription,
// } from '@preforms/ts';

// import { PasswordStrengthField } from '../custom-form-fields/PasswordStrengthField';

// export const extensiveForm = [
//   new Fieldset({
//     key: 'account',
//     fields: [
//       new EmailField({
//         placeholder: 'you@example.com',
//         icons: [
//           {
//             name: 'alternate_email',
//             side: 'left',
//           },
//         ],
//       }),
//       new TextField({
//         key: 'username',
//         autocomplete: 'username',
//         hint: '3-30 characters, No spaces.',
//         minLength: 3,
//         maxLength: 30,
//         pattern: ['^[a-zA-Z0-9_]+$', 'must contain letters/numbers/underscore only'],
//         required: true,
//         placeholder: 'test',
//         icons: [
//           {
//             name: 'person',
//             side: 'right',
//           },
//         ],
//         triggers: [
//           {
//             on: 'change',
//             action: 'fetch',
//             fetchUrl: '/api/check-username/$value',
//             mode: 'patch',
//           },
//         ],
//       }),

//       new PasswordField({
//         hint: 'At least 8 characters. Use a mix of letters and numbers.',
//         minLength: 8,
//         autocomplete: 'off',
//         icons: [
//           {
//             name: '🎲',
//             side: 'left',
//             action: 'generatePassword',
//             title: 'Generate a random password',
//           },
//           {
//             name: '🔑',
//             side: 'left',
//             expressions: [
//               "field.type = field.type === 'text' ? 'password' : 'text'",
//               "icon.name = field.type === 'text' ? '👁️': '🔑'",
//             ],
//           },
//         ],
//       }),

//       new PasswordStrengthField({
//         key: 'passwordStenght',
//         min: 0,
//         max: 4,
//         value: 0,
//         low: 1,
//         high: 5,
//         optimum: 4,
//         disabled: true,
//       }),

//       new TextareaField({
//         key: 'bio',
//         label: 'Short bio',
//         hint: 'Optional. Will appear on your profile.',
//         placeholder: 'A short intro (max 280 chars)',
//         maxLength: 280,
//         rows: 4,
//       }),

//       new OutputField({
//         key: 'characters',
//         disabled: true,
//         calculation: '`Characters: ${(account.bio||"").length}/280`',
//         for: ['bio'],
//       }),
//     ],
//   }),

//   new Fieldset({
//     key: 'preferences',
//     label: 'Preferences & Extra controls',
//     fields: [
//       new FormGrid(
//         [
//           new TextField({
//             key: 'timeZone',
//             hint: 'Choose or type your preferred timezone.',
//             options: ['Europe/Nicosia', 'Europe/London', 'America/New_York', 'Asia/Tokyo'],
//             placeholder: 'e.g. Europe/Nicosia',
//           }),
//           new SelectField({
//             key: 'language',
//             value: 'en',
//             options: [
//               new FormFieldOption({ value: 'en', label: 'English' }),
//               new FormFieldOption({ value: 'el', label: 'Greek' }),
//               new FormFieldOption({ value: 'es', label: 'Spanish' }),
//               new FormFieldOption({ value: 'fr', label: 'French' }),
//               new FormFieldOption({ value: 'de', label: 'German' }),
//             ],
//             hint: 'We use this to localize the UI.',
//             autocomplete: '',
//           }),
//         ],
//         { columns: '1fr 1fr' },
//       ),

//       new CheckboxGroupField('notifications', ['email', 'sms', 'push'], ['email']),

//       new InputField({
//         key: 'volume',
//         type: 'range',
//         min: 0,
//         max: 100,
//         value: 50,
//         label: 'Preview volume',
//       }),

//       new InputField({
//         key: 'files',
//         type: 'number',
//         min: 0,
//         max: 100,
//         value: 0,
//         label: 'Files',
//         triggers: [
//           {
//             on: 'change',
//             action: 'update_state',
//             applyState: { hidden: false },
//             condition: { operator: 'gt', value: 0 },
//             targetField: 'file',
//           },
//         ],
//       }),

//       new OutputField({
//         key: 'volumeCalculation',
//         calculation: 'preferences.volume;',
//         for: ['volume'],
//         disabled: true,
//       }),

//       new InputField({
//         key: 'color',
//         type: 'color',
//         label: 'Favorite color',
//       }),

//       new InputField({
//         key: 'file',
//         type: 'file',
//         label: 'Upload files',
//         value: null,
//         hidden: true,
//       }),
//     ],
//   }),

//   new Fieldset({
//     label: 'Non-input & Decorative elements that interact with forms',
//     fields: [
//       new NumberField({
//         key: 'calcA',
//         label: 'Number A',
//         triggers: [
//           {
//             on: 'input',
//             action: 'update_state',
//             targetField: 'calcB',
//             applyState: { required: true },
//           },
//         ],
//       }),
//       new NumberField({
//         key: 'calcB',
//         label: 'Number B',
//         triggers: [
//           {
//             on: 'input',
//             action: 'validate',
//             validation: {
//               operator: 'gt',
//               compareTo: 'calcA',
//               message: 'mast be grater than Number A',
//             },
//           },
//         ],
//       }),
//       new OutputField({
//         label: 'Sum',
//         key: 'output',
//         hint: 'This <output> shows the computed result of two inputs using JS.',
//         calculation: 'Number(calcA) + Number(calcB)',
//         for: ['calcA', 'calcB'],
//       }),

//       new DetailsField({
//         label: 'More settings (progressive disclosure)',
//         hint: `Use <details> for optional advanced settings that don't
//                 need to clutter the primary form. Content inside remains
//                 form-accessible.`,
//         fields: [
//           new InputField({
//             type: 'checkbox',
//             key: 'advancedFlag',
//             label: 'Enable advanced option',
//           }),
//           new InputField({
//             type: 'text',
//             key: 'advancedValue',
//             label: 'Advanced value',
//             placeholder: 'Optional',
//           }),
//         ],
//       }),

//       new InputField({
//         type: 'checkbox',
//         key: 'terms',
//         label: 'Agree to terms',
//         triggers: [
//           {
//             on: 'change',
//             action: 'update_state',
//             targetField: 'confirm-dialog',
//             applyState: { disabled: false },
//             once: true, // show state only if USA
//           },
//         ],
//       }),
//     ],
//   }),
//   new Fieldset({
//     label: 'Order Items 🔥🔥🔥',
//     fields: [
//       new FieldArray({
//         key: 'items',
//         maxItems: 3,
//         minItems: 1,
//         value: [{ name: 'gil', price: 100 }],
//         addButton: true,
//         uniqueBy: 'name',
//         fields: [
//           new FormRow({ fields: [new NumberField({ key: 'price', required: true, min: 5 })] }),
//         ],
//         aggregates: [
//           {
//             action: 'sum',
//             field: 'price',
//             value: 1000,
//             operator: 'lte',
//             message: 'price cannot exxceed $1000',
//           },
//           {
//             field: 'price',
//             value: 100,
//             operator: 'gt',
//             action: 'sum',
//           },
//         ],
//       }),
//     ],
//   }),
//   new DialogField({
//     key: 'newsletters',
//     width: '500px',
//     disabled: true,
//     id: 'newsletters-dialog',
//     fields: [
//       new FormDescription(`CNN's newsletters cover a variety of topics, from daily news to lifestyle content,
//       markets info to medical news. Subscribe to get the latest information`),
//       new EmailField({ key: 'email', id: 'newsletter', required: false }),
//       new FormRow([
//         new CloseDialogButton('newsletters-dialog'),
//         new SubmitButton({ type: 'submit', value: 'Save', meta: { appearance: 'tonal' } }),
//       ]),
//     ],
//   }),
//   new InputField({
//     type: 'checkbox',
//     key: 'subscribe',
//     label: 'Subscribe to newsletter',
//     triggers: [
//       {
//         on: 'change',
//         action: 'update_state',
//         targetField: 'newsletters-dialog',
//         applyState: { disabled: false },
//         condition: true,
//       },
//     ],
//   }),
//   new DialogField({
//     key: 'confirm',
//     disabled: true,
//     id: 'confirm-dialog',
//     fields: [
//       new FormDescription(`Angular is a platform and framework for building client applications in HTML and TypeScript.
//   Angular is itself written in TypeScript. It implements core and optional functionality as a
//   set of TypeScript libraries that you import into your apps.`),
//       new CloseDialogButton('confirm-dialog'),
//     ],
//   }),
// ];
