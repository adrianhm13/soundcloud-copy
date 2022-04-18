import { Component } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from '../../services/signin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../signin/signin.component.css'],
})
export class RegisterComponent {
  isLoading = false;
  error: string | null = null;

  constructor(private router: Router, private signinService: SigninService) {}

  async onSubmit(form: NgForm) {
    this.isLoading = true;
    const { email, password, checkPassword } = form.value;
    if (checkPassword !== password) {
      return (this.error = 'Password does not match');
    }

    try {
      const user = await this.signinService.signupUser(email, password);
      if (user) this.router.navigateByUrl('home');
    } catch (error) {
      const typedError = error as FirebaseError;
      const errorMessage = this.signinService.formatError(typedError);
      this.error = errorMessage;
    }

    this.isLoading = false;

    return;
  }

  onSignup() {
    this.router.navigateByUrl('login');
  }
}
