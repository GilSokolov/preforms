import { ExampleDefinition } from 'src/app/example-registry';
import content from './icons-form.component.ts.txt';
import config from './app.config.ts.txt';

import { IconsFormComponent } from './icons-form.component';
export const ICONS_FIELDS_EXAMPLE: ExampleDefinition = {
  id: 'icons-fields',
  title: 'Icons & Input Actions',
  description: `
Demonstrates interactive field icons. Includes:
- Password show/hide and generate buttons
- Number increment/decrement icons
- Clearable text field
- Info icon triggering a dialog
- Custom event triggers
`,
  category: 'Form Fields',

  component: IconsFormComponent,

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
    {
      label: 'App Config',
      language: 'typescript',
      content: config,
    },
  ],
};
