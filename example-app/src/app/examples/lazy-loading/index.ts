import { ExampleDefinition } from 'src/app/example-registry';
import { LazyLoadingFieldsComponent } from './lazy-loading.component';

import ts from './lazy-loading.component.ts.txt';
import editor from './editor.component.ts.txt';
import config from './app.config.ts.txt';

export const LAZY_LOADING_FIELDS_EXAMPLE: ExampleDefinition = {
  id: 'lazy-loading-fields',
  title: 'Lazy Loaded Fields',
  description:
    'Demonstrates lazy-loading custom fields. The editor field component is loaded only when required.',
  category: 'Extensibility',
  component: LazyLoadingFieldsComponent,
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content: ts,
    },
    {
      label: 'editor.component.ts',
      language: 'typescript',
      content: editor,
    },
    {
      label: 'app.config.ts',
      language: 'typescript',
      content: config,
    },
  ],
};
