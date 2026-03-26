import { ExampleDefinition } from 'src/app/example-registry';

import ts from './cart-builder.component.ts.txt';
import scss from './cart-builder.component.scss.txt';

import { CartBuilderComponent } from './cart-builder.component';

export const CART_BUILDER_EXAMPLE: ExampleDefinition = {
  id: 'cart-builder',
  title: 'Dynamic FieldArray',
  description:
    'A real-world shopping cart example using FieldArray. Users can dynamically add or remove items while subtotals and totals update automatically.',
  category: 'Advanced Components',

  component: CartBuilderComponent,

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content: ts,
    },
    {
      label: 'SCSS',
      language: 'css',
      content: scss,
    },
  ],
};
