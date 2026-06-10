import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import {
  FieldArray,
  FormRow,
  TextField,
  NumberField,
  OutputField,
  FormDivider,
  SubmitButton,
  FieldButton,
  DialogField,
  TextareaField,
  Aggregate,
  FormGrid,
} from '@preforms/ts';

@Component({
  selector: 'app-cart-builder',
  template: `
    <preforms className="cart-form" (submittedData)="logData($event)" [fields]="fields" />
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
        new FormGrid({
          className: 'cart-row',
          gap: '1rem',
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

            new FieldButton({
              type: 'button',
              label: 'Comment',
              command: 'show-modal',
              commandfor: 'comment-dialog[$index]',
              className: 'comment-btn',
            }),

            new OutputField({
              key: 'totalPrice',
              calculation:
                '"$"+(Number(items[$index].price) * Number(items[$index].qty)).toFixed(2)',
              for: ['price[$index]', 'qty[$index]'],
              className: 'subtotal',
            }),

            new DialogField({
              id: 'comment-dialog[$index]',
              fields: [
                new TextareaField({
                  key: 'comment',
                  rows: 5,
                }),

                new FormRow([
                  new SubmitButton('Save'),

                  new FieldButton({
                    label: 'Close',
                    type: 'button',
                    command: 'close',
                    commandfor: 'comment-dialog[$index]',
                  }),
                ]),
              ],
            }),
          ],
          columns: '1fr 1fr 1fr 1fr',
        }),
      ],

      aggregates: [
        // Special action: Î£(price Ã— qty) across all items
        Aggregate.product({
          field: ['price', 'qty'], // Fields to multiply per item
          value: 2000,
          operator: 'lte',
          message: 'total cannot exceed $2000',
        }),

        Aggregate.unique('name'),
      ],
    }),

    new FormDivider({ label: 'Summary' }),

    new OutputField({
      key: 'total',
      calculation: `
        "$" + items.reduce(
          (sum, i) => sum + (Number(i.price) * Number(i.qty)),
          0
        )
      `,
      for: ['price[*]', 'qty[*]', 'items'],
    }),

    new SubmitButton({
      label: 'Checkout',
      className: 'checkout-btn',
    }),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
