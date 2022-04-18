import { Component } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from '../../services/signin.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../signin/signin.component.css'],
})
export class LoginComponent {
  error: string | null = null;
  isLoading = false;

  constructor(private router: Router, private signinService: SigninService) {}

  async onSubmit(form: NgForm) {
    if(!form.valid) return

    this.isLoading = true;
    const { email, password } = form.value;

    try {
      const user = await this.signinService.signinUser(email, password);
      if (user) this.router.navigateByUrl('home');
    } catch (error) {
      const typedError = error as FirebaseError;
      this.error = this.signinService.formatError(typedError);
    }

    this.isLoading = false;
  }

  onClick() {
    this.router.navigateByUrl('register');
  }
}
