import { ExampleDefinition } from 'src/app/example-registry';
import content from './validation-rules.component.ts.txt';
import { ValidationFormComponent } from './validation-rules.component';

export const SIMPLE_VALIDATION_FORM: ExampleDefinition = {
  id: 'simple-validation-form',
  title: 'Simple validation',
  description: '',
  component: ValidationFormComponent,
  category: 'Form Fields',
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
  ],
};
