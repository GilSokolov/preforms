import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { FIELD_ICON_TEMPLATES } from '@preforms/angular/core/tokens';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { FieldIconEmojiComponent } from '@preforms/angular/native/fields/field-icon-emoji.component';
import {
  DialogField,
  FormDescription,
  FormList,
  FormTitle,
  FormTitleLevel,
  NumberField,
  PasswordField,
  SubmitButton,
  TextField,
} from '@preforms/ts';

@Component({
  selector: 'app-icons-form',
  template: `<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [
    NATIVE_FORM_ELEMENTS,
    {
      provide: FIELD_ICON_TEMPLATES,
      useValue: FieldIconEmojiComponent,
    },
  ],
})
export class IconsFormComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
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
            "icon.name = field.type === 'text' ? '👁️' : '🔑'",
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
      width: '400px',
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
          applyState: { disabled: false },
          sourceField: 'SKU',
        },
      ],
    }),

    new TextField({
      key: 'name',
      icons: [
        {
          name: '🔤',
          side: 'right',
          action: 'uppercase', // custom action injected via token
          title: 'Uppercase text',
        },
      ],
    }),

    new SubmitButton(),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
