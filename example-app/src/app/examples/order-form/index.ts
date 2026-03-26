import { ExampleDefinition } from 'src/app/example-registry';
import { OrderFormDemoComponent } from './order-form-demo.component';

import ts from './order-form-demo.component.ts.txt';
import scss from './order-form-demo.component.scss.txt';
import config from './app.config.ts.txt';

export const SIMPLE_FORM_EXAMPLE: ExampleDefinition = {
  id: 'order-form',
  title: 'Order Form',
  description: `
  Modern product/order form demo built with @preforms/angular featuring:

  - live price recalculation
  - dynamic submit button text
  - quantity stepper with emoji buttons
  - conditional field visibility/logic
  - fieldsets, rows & dividers
  - product image + rich typography
  - fully declarative field & layout definition

  No handwritten template HTML or reactive forms boilerplate — everything is defined in clean TypeScript objects.
  `,
  component: OrderFormDemoComponent,
  category: 'Examples',
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
    {
      label: 'App Config',
      language: 'typescript',
      content: config,
    },
  ],
};
