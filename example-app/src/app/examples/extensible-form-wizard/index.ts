import { ExampleDefinition } from 'src/app/example-registry';
import { ExtensibleFormWizardComponent } from './extensible-form-wizard.component';

import ts from './extensible-form-wizard.component.ts.txt';
import component from './wizard.component.ts.txt';
import componentHTML from './wizard.component.html.txt';
import field from './wizard.field.ts.txt';

export const EXTENSIBLE_WIZARD_EXAMPLE: ExampleDefinition = {
  id: 'extensible-wizard',
  title: 'Wizard Form',
  description:
    'Demonstrates how the form engine can be extended with custom fields. This example implements a WizardField component that renders multi-step form sections.',
  category: 'Examples',
  component: ExtensibleFormWizardComponent,

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content: ts,
    },
    {
      label: 'wizard.component.ts',
      language: 'typescript',
      content: component,
    },
    {
      label: 'wizard.component.html',
      language: 'html',
      content: componentHTML,
    },
    {
      label: 'wizard.field.ts',
      language: 'typescript',
      content: field,
    },
  ],
};
