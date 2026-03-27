import { Routes } from '@angular/router';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'examples/:id',
    component: ExamplePageComponent,
  },
];
