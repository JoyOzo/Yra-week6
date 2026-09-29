import { Component, signal } from '@angular/core';
import { NgStyle } from '@angular/common';
import { form, FormField, required, email, minLength } from '@angular/forms/signals';
import { LoginService } from '../../services/login';
import { ColorService } from '../../services/color';

@Component({
  selector: 'app-login',
  imports: [FormField, NgStyle],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  message = signal('Hello, Login');
  backgroundColor = signal('white');

  loginModel = signal({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel, (path) => {
    required(path.email);
    email(path.email);

    required(path.password);
    minLength(path.password, 6);
  });

 constructor(
  private loginService: LoginService,
  private colorService: ColorService
) {
  this.colorService.color.subscribe((selectedColor) => {
    this.backgroundColor.set(selectedColor);
  });

  this.colorService.behaviorColor.subscribe((selectedColor) => {
    console.log('Login BehaviorSubject color:', selectedColor);
    this.backgroundColor.set(selectedColor);
  });
}

  submit() {
  const credentials = this.loginModel();

  this.loginService.login(
    credentials.email,
    credentials.password
  )
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
}
submitObservable() {
  const credentials = this.loginModel();

  this.loginService.loginObservable(
    credentials.email,
    credentials.password
  ).subscribe({
    next: (result) => {
      console.log('Observable result:', result);
    },
    error: (error) => {
      console.log('Observable error:', error);
    },
    complete: () => {
      console.log('Observable completed');
    }
  });
}
}
