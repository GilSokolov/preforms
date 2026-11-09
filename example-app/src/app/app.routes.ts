import { Routes } from '@angular/router';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { Home } from './pages/home/home';
import { ArrayTriggerBugComponent } from './pages/array-trigger-bug/array-trigger-bug.component';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'array-trigger-bug', component: ArrayTriggerBugComponent },
  {
    path: 'examples/:id',
    component: ExamplePageComponent,
  },
];
