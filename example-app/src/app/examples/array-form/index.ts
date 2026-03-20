import { ExampleDefinition } from 'src/app/example-registry';

export const CART_BUILDER_EXAMPLE: ExampleDefinition = {
  id: 'cart-builder',
  title: 'Dynamic FieldArray',
  description:
    'A real-world shopping cart example using FieldArray. Users can dynamically add or remove items while subtotals and totals update automatically.',
  category: 'Advanced Components',

  loadComponent: () => import('./cart-builder.component').then((m) => m.CartBuilderComponent),

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      load: () => import('./cart-builder.component.ts.txt').then((m) => m.default),
    },
    {
      label: 'SCSS',
      language: 'scss',
      load: () => import('./cart-builder.component.scss.txt').then((m) => m.default),
    },
  ],
};
