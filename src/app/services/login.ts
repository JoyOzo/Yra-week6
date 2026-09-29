import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    login(email: string, password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (email && password) {
      console.log('Login credentials:', { email, password });
      resolve('Login successful');
    } else {
      reject('Email and password are required');
    }
  });
}
loginObservable(email: string, password: string): Observable<string> {
  return new Observable<string>((observer) => {
    if (email && password) {
      observer.next(JSON.stringify({ email, password }));
      observer.complete();
    } else {
      observer.error('Email and password are required');
    }
  }).pipe(
    map((credentials: string) => {
      const uppercaseCredentials = credentials.toUpperCase();

      console.log('Observable credentials:', uppercaseCredentials);

      return uppercaseCredentials;
    })
  );
}
}

