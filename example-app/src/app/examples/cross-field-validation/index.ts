import { ExampleDefinition } from 'src/app/example-registry';
import content from './cross-validation-form.component.ts.txt';
import { CrossValidationFormComponent } from './cross-validation-form.component';

export const CROSS_VALIDATION_EXAMPLE: ExampleDefinition = {
  id: 'cross-field-validation',
  title: 'Cross Field Validation',
  description:
    'Demonstrates real-world validation scenarios such as password confirmation, email confirmation, date ranges, and order validation.',
  category: 'Reactivity & Validation',
  component: CrossValidationFormComponent,
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
  ],
};
