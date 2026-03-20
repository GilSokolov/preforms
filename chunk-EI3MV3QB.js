import"./chunk-7DXB7J77.js";var r=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  FieldArray,\r
  FormRow,\r
  TextField,\r
  NumberField,\r
  OutputField,\r
  FormDivider,\r
  SubmitButton,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-cart-builder',\r
  template: \`\r
    <preforms-dynamic-form\r
      className="cart-form"\r
      (submittedData)="logData($event)"\r
      [fields]="fields"\r
    />\r
  \`,\r
  styleUrl: './cart-builder.component.scss',\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class CartBuilderComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new FieldArray({\r
      key: 'items',\r
      label: 'Shopping Cart',\r
      minItems: 1,\r
      maxItems: 8,\r
      addButton: true,\r
      removeButton: true,\r
\r
      value: [{ name: 'Wireless Mouse', price: 25, qty: 1 }],\r
\r
      fields: [\r
        new FormRow({\r
          className: 'cart-row',\r
          fields: [\r
            new TextField({\r
              key: 'name',\r
              placeholder: 'Product name',\r
              required: true,\r
            }),\r
\r
            new NumberField({\r
              key: 'price',\r
              label: 'Price',\r
              min: 1,\r
              value: 0,\r
              required: true,\r
            }),\r
\r
            new NumberField({\r
              key: 'qty',\r
              label: 'Qty',\r
              min: 1,\r
              value: 1,\r
              required: true,\r
            }),\r
\r
            new OutputField({\r
              key: 'subtotal',\r
              label: 'Subtotal',\r
              calculation: 'Number(items[$index].price) * Number(items[$index].qty)',\r
              for: ['price[$index]', 'qty[$index]'],\r
              disabled: true,\r
            }),\r
          ],\r
        }),\r
      ],\r
\r
      aggregates: [\r
        {\r
          action: 'product',\r
          field: ['price', 'qty'],\r
          value: 2000,\r
          operator: 'lte',\r
          message: 'Cart total cannot exceed $2000',\r
        },\r
        {\r
          action: 'unique',\r
          field: 'name',\r
        },\r
      ],\r
    }),\r
\r
    new FormDivider({ label: 'Summary' }),\r
\r
    new OutputField({\r
      key: 'cartTotal',\r
      label: 'Total',\r
      disabled: true,\r
      calculation: \`\r
        items.reduce(\r
          (sum, i) => sum + (Number(i.price) * Number(i.qty)),\r
          0\r
        )\r
      \`,\r
      for: ['price[*]', 'qty[*]'],\r
    }),\r
\r
    new SubmitButton('Checkout'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{r as default};
