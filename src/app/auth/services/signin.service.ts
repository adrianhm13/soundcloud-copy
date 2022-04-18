import { Injectable } from '@angular/core';
import { FirebaseError } from '@angular/fire/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  signinUser(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  formatError(error: FirebaseError) {
    let errorMessage;

    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = "We couldn't find your user.";
        break;
      case 'auth/email-already-exists':
        errorMessage = 'This email already exists';
        break;
      case 'auth/wrong-password':
        errorMessage = 'The password it is incorrect';
        break;
      default:
        errorMessage = 'An unknown error has occured';
    }

    return errorMessage;
  }
}
