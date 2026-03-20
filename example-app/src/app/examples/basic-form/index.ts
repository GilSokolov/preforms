import { ExampleDefinition } from 'src/app/example-registry';

export const BASIC_FORM_EXAMPLE: ExampleDefinition = {
  id: 'basic-form',
  title: 'Basic Form Example',
  description: `Minimal form with text and email fields to get started quickly.`,
  category: 'Getting Started',
  loadComponent: () => import('./basic-form.component').then((m) => m.BasicFormComponent),
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      load: () => import('./basic-form.component.ts.txt').then((m) => m.default),
    },
  ],
};
