import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SigninComponent],
  exports: [SigninComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
})
export class AuthModule {}
