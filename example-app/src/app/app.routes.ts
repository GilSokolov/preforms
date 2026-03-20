import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'examples/:id',
    loadComponent: () =>
      import('./components/example-page/example-page.component').then(
        (m) => m.ExamplePageComponent,
      ),
  },
  { path: '', redirectTo: '/examples/basic-form', pathMatch: 'full' },
];
