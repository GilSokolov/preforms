import { ExampleDefinition } from 'src/app/example-registry';
import content from './dynamic-form-fetch-remote.component.ts.txt';
import { DynamicFormFetchRemoteComponent } from './dynamic-form-fetch-remote.component';
export const DYNAMIC_SELECT_FETCH_REMOTE_EXAMPLE: ExampleDefinition = {
  id: 'dynamic-select-fetch-remote',
  title: 'Pokemon Game',
  description: ``,
  category: 'Examples',
  component: DynamicFormFetchRemoteComponent,
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
  ],
};
