import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./landing/landing.routes'),
    pathMatch: 'full',
    data: { hideSidebar: true },
  },
];
