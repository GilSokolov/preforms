import { Routes } from '@angular/router';
import { ExamplePageComponent } from './components/example-page/example-page.component';

export const routes: Routes = [
  {
    path: 'examples/:id',
    component: ExamplePageComponent,
  },
  { path: '', redirectTo: '/examples/basic-form', pathMatch: 'full' },
];
