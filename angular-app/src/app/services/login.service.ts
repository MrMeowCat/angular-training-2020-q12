import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login(email: string, password: string): Observable<boolean> {
    const success: boolean = email === 'admin@mail.com' && password === 'password';
    if (success) {
      localStorage.setItem('key', 'auth_key');
    }
    return of(success);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('key');
  }

  logout(): void {
    localStorage.removeItem('key');
  }
}
