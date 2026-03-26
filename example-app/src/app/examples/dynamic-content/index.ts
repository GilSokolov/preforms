import { ExampleDefinition } from 'src/app/example-registry';
import content from './room-selection.component.ts.txt';
import { RoomSelectionComponent } from './room-selection.component';
export const DYNAMIC_CONTENT: ExampleDefinition = {
  id: 'room-selection',
  title: 'Dynamic Content',
  description:
    'Shows how triggers can dynamically reveal content based on a selected value. Selecting a room type displays the corresponding title and description.',
  category: 'Reactivity & Validation',

  component: RoomSelectionComponent,

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
  ],
};
