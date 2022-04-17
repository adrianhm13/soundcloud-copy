import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../signin/signin.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    const { email, password } = form.value;
    console.log(email, password)
    console.log(form.controls)
  }

  onSignup() {
    this.router.navigateByUrl('register');
  }
}
