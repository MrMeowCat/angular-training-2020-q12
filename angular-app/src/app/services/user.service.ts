import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /**
   * Симулируем запрос на сервер.
   */
  getUsers(): Observable<User[]> {
    return of([
      {
        username: 'admin',
        email: ''
      },
      {
        username: 'guest',
        email: ''
      }
    ]).pipe(delay(1000));
  }
}
