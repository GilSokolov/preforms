import { ExampleDefinition } from 'src/app/example-registry';
import { BasicFormComponent } from './basic-form.component';
import introMd from './basic-form.component.ts.txt';

export const BASIC_FORM_EXAMPLE: ExampleDefinition = {
  id: 'basic-form',
  title: 'Basic Form Example',
  description: `Minimal form with text and email fields to get started quickly.`,
  category: 'Getting Started',
  component: BasicFormComponent,
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content: introMd,
    },
  ],
};
