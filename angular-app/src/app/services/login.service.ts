import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(email: string, password: string): Observable<boolean> {
    return of(email === 'admin@mail.com' && password === 'password');
  }
}
