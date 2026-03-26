import { ExampleDefinition } from 'src/app/example-registry';
import content from './async-validate.component.ts.txt';
import { AsyncValidationComponent } from './async-validate.component';

export const ASYNC_VALIDATION_EXAMPLE: ExampleDefinition = {
  id: 'async-validation',
  title: 'Async Validation',
  description: `
Demonstrates how to use fetch triggers to perform asynchronous validation.
This example shows a username field that checks availability via an API endpoint
and displays validation hints dynamically.
  `,
  category: 'Reactivity & Validation',

  component: AsyncValidationComponent,

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
  ],
};
