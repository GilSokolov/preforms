// import { ExampleDefinition } from 'src/app/example-registry';

// export const LAZY_LOADING_FIELDS_EXAMPLE: ExampleDefinition = {
//   id: 'lazy-loading-fields',
//   title: 'Lazy Loaded Fields',
//   description:
//     'Demonstrates lazy-loading custom fields. The editor field component is loaded only when required.',
//   category: 'Extensibility',
//   loadComponent: () => import('./lazy-loading.component').then((m) => m.LazyLoadingFieldsComponent),
//   assets: [
//     {
//       label: 'TS',
//       language: 'typescript',
//       load: () => import('./lazy-loading.component.ts.txt').then((m) => m.default),
//     },

//     {
//       label: 'Extened Field',
//       language: 'typescript',
//       load: () => import('./editor.ts.txt').then((m) => m.default),
//     },

//     {
//       label: 'App Config',
//       language: 'typescript',
//       load: () => import('./app.config.ts.txt').then((m) => m.default),
//     },

//     {
//       label: 'Editor ts',
//       language: 'typescript',
//       load: () => import('./editor.component.ts.txt').then((m) => m.default),
//     },

//     {
//       label: 'Editor scss',
//       language: 'scss',
//       load: () => import('./editor.component.scss.txt').then((m) => m.default),
//     },

//     {
//       label: 'Editor html',
//       language: 'html',
//       load: () => import('./editor.component.html.txt').then((m) => m.default),
//     },
//   ],
// };
