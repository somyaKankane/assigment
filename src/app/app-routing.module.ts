import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';



export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', loadChildren: './auth/auth.module#AuthModule' }
    ]
  },
  {
    path: 'auth',
    component: FullComponent,
    children: [
      { path: '', loadChildren: './auth/auth.module#AuthModule' }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
