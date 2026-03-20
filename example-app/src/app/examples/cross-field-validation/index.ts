import { ExampleDefinition } from 'src/app/example-registry';

export const CROSS_VALIDATION_EXAMPLE: ExampleDefinition = {
  id: 'cross-field-validation',
  title: 'Cross Field Validation',
  description:
    'Demonstrates real-world validation scenarios such as password confirmation, email confirmation, date ranges, and order validation.',
  category: 'Reactivity & Validation',
  loadComponent: () =>
    import('./cross-validation-form.component').then((m) => m.CrossValidationFormComponent),
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      load: () => import('./cross-validation-form.component.ts.txt').then((m) => m.default),
    },
  ],
};
