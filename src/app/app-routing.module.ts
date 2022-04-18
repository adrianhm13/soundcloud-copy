import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
} from '@angular/fire/compat/auth-guard';

import { SigninComponent } from './auth/components/signin/signin.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './pages/home/home.component';

const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
const redirectNotLoggedUsers = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
        ...canActivate(redirectLoggedInToHome),
      },
      {
        path: 'register',
        component: RegisterComponent,
        ...canActivate(redirectLoggedInToHome),
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectNotLoggedUsers),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
