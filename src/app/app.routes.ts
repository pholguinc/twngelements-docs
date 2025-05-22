import { Routes } from '@angular/router';
import { DocsComponent } from './docs/docs.component';
import { NG_DOC_ROUTING } from '@ng-doc/generated';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.routes'),
    pathMatch: 'full',
    data: { hideSidebar: true },
  },
  {
    path: 'docs',
    component: DocsComponent,
    children: NG_DOC_ROUTING,
  },
];
