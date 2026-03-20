import {
  DialogField,
  FormDescription,
  FormList,
  FormTitle,
  FormTitleLevel,
  NumberField,
  PasswordField,
  TextField,
} from '@preforms/ts';

export const icons = [
  new PasswordField({
    hint: 'At least 8 characters. Use a mix of letters and numbers.',
    minLength: 8,
    autocomplete: 'off',
    icons: [
      {
        name: '🎲',
        side: 'left',
        action: 'generatePassword',
        title: 'Generate a random password',
      },
      {
        name: '🔑',
        side: 'left',
        expressions: [
          "field.type = field.type === 'text' ? 'password' : 'text'",
          "icon.name = field.type === 'text' ? '👁️': '🔑'",
        ],
      },
    ],
  }),
  new NumberField({
    key: 'amount',
    value: 0,
    min: 0,
    icons: [
      {
        name: '➕',
        side: 'left',
        expressions: ['field.value++'],
      },
      {
        name: '➖',
        side: 'right',
        expressions: ['field.value--'],
      },
    ],
  }),

  new TextField({
    key: 'search',
    icons: [
      {
        name: '❌',
        side: 'left',
        expressions: ['field.value = null'],
        visible: 'field.value',
      },
    ],
  }),

  new TextField({
    key: 'SKU',
    placeholder: 'Enter unique product SKU',
    icons: [
      {
        name: 'ℹ️',
        side: 'left',
        emit: 'custom:skuInfoOpen',
      },
    ],
  }),

  new DialogField({
    key: 'sku-info',
    disabled: true,
    closeBtn: true,
    fields: [
      new FormTitle('What is SKU?', FormTitleLevel.H2),
      new FormDescription(
        `A SKU is a unique identifier for each product in your inventory. 
        It helps you track stock, manage orders, and avoid duplicate listings.`,
      ),
      new FormTitle('Tips for creating SKUs:', FormTitleLevel.H3),
      new FormList([
        'Keep it short and consistent (e.g., EB-AP-2026)',
        'Avoid spaces or special characters',
        'Use a pattern that reflects product type or brand',
      ]),
    ],
    triggers: [
      {
        on: 'custom:skuInfoOpen',
        action: 'update_state',
        applyState: {
          disabled: false,
        },
        sourceField: 'SKU',
      },
    ],
    width: '400px',
  }),
];
