import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import {
  FieldArray,
  FormRow,
  TextField,
  NumberField,
  OutputField,
  FormDivider,
  SubmitButton,
} from '@preforms/ts';

@Component({
  selector: 'app-cart-builder',
  template: `
    <preforms-dynamic-form
      className="cart-form"
      (submittedData)="logData($event)"
      [fields]="fields"
    />
  `,
  styleUrl: './cart-builder.component.scss',
  imports: [DynamicFormComponent],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class CartBuilderComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new FieldArray({
      key: 'items',
      label: 'Shopping Cart',
      minItems: 1,
      maxItems: 8,
      addButton: true,
      removeButton: true,

      value: [{ name: 'Wireless Mouse', price: 25, qty: 1 }],

      fields: [
        new FormRow({
          className: 'cart-row',
          fields: [
            new TextField({
              key: 'name',
              placeholder: 'Product name',
              required: true,
            }),

            new NumberField({
              key: 'price',
              label: 'Price',
              min: 1,
              value: 0,
              required: true,
            }),

            new NumberField({
              key: 'qty',
              label: 'Qty',
              min: 1,
              value: 1,
              required: true,
            }),

            new OutputField({
              key: 'subtotal',
              label: 'Subtotal',
              calculation: 'Number(items[$index].price) * Number(items[$index].qty)',
              for: ['price[$index]', 'qty[$index]'],
              disabled: true,
            }),
          ],
        }),
      ],

      aggregates: [
        {
          action: 'product',
          field: ['price', 'qty'],
          value: 2000,
          operator: 'lte',
          message: 'Cart total cannot exceed $2000',
        },
        {
          action: 'unique',
          field: 'name',
        },
      ],
    }),

    new FormDivider({ label: 'Summary' }),

    new OutputField({
      key: 'cartTotal',
      label: 'Total',
      disabled: true,
      calculation: `
        items.reduce(
          (sum, i) => sum + (Number(i.price) * Number(i.qty)),
          0
        )
      `,
      for: ['price[*]', 'qty[*]'],
    }),

    new SubmitButton('Checkout'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
