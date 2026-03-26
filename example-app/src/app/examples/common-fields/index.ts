import { ExampleDefinition } from 'src/app/example-registry';
import content from './common-fields.component.ts.txt';
import { CommonFieldsComponent } from './common-fields.component';

export const COMMON_FIELDS_EXAMPLE: ExampleDefinition = {
  id: 'common-fields',
  title: 'Common Fields',
  description: `Displays all the prebuilt common fields available in the library, including
    name, email, address, phone, date of birth, gender, currency, description, and action buttons.
    Ideal for reference and testing.`,
  category: 'Form Fields',

  component: CommonFieldsComponent,

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
  ],
};
