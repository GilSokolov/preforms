import { ExampleDefinition } from 'src/app/example-registry';

export const DYNAMIC_CONTENT: ExampleDefinition = {
  id: 'room-selection',
  title: 'Dynamic Content',
  description:
    'Shows how triggers can dynamically reveal content based on a selected value. Selecting a room type displays the corresponding title and description.',
  category: 'Reactivity & Validation',

  loadComponent: () => import('./room-selection.component').then((m) => m.RoomSelectionComponent),

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      load: () => import('./room-selection.component.ts.txt').then((m) => m.default),
    },
  ],
};
