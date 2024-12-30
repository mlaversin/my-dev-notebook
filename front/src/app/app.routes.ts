import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegisterComponent } from './auth/pages/register/register.component';
import { PasswordRevoveryComponent } from './auth/pages/password-revovery/password-revovery.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./auth/pages/password-revovery/password-revovery.component').then(
        (m) => m.PasswordRevoveryComponent
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
