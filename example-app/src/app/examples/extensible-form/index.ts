import { ExampleDefinition } from 'src/app/example-registry';

import ts from './extensible-form.component.ts.txt';
import password from './password-strength.ts.txt';
import field from './PasswordStrengthField.ts.txt';

import { ExtensibleFormComponent } from './extensible-form.component';

export const EXTENSIBILITY_EXAMPLE: ExampleDefinition = {
  id: 'extensibility',
  title: 'Custom Fields',
  description: 'Shows custom fields like PasswordStrengthField and how to use the event system.',
  category: 'Extensibility',
  component: ExtensibleFormComponent,
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content: ts,
    },
    {
      label: 'Custom Component',
      language: 'typescript',
      content: password,
    },
    {
      label: 'Extened Field',
      language: 'typescript',
      content: field,
    },
  ],
};
