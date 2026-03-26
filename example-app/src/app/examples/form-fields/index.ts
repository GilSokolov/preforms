import { ExampleDefinition } from 'src/app/example-registry';
import { FormFieldsComponent } from './form-fields.component';
import content from './form-fields.component.ts.txt';

export const FORM_FIELDS_EXAMPLE: ExampleDefinition = {
  id: 'form-fields',
  title: 'Form Fields Reference',
  description: 'Shows all built-in fields with quick examples for each type.',
  category: 'Form Fields',
  component: FormFieldsComponent,
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
  ],
};
