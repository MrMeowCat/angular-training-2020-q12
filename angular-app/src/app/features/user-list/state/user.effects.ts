import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { GetUsersAction, SetUsersAction, UserActionTypes } from 'src/app/features/user-list/state/user.actions';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Injectable({providedIn: 'root'})
export class UserEffects {

  /**
   * Эффект - это побочное действие, которое мы бы хотели вызвать в ответ на какой-то Action.
   * Обычно мы их создаем, чтобы вынести логику вызовов и обработки HTTP запросов/ответов из компонентов.
   * Эффект объявляется с помощью декоратора Effect и сервиса Actions. Это Observable,
   * в котором обязательно есть оператор ofType, он нужен чтобы фильтровать экшены по типу.
   * Данный эффект будет вызван для экшена GET_USERS.
   */
  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.GET_USERS),
    // switchMap - следующий оператор, он принимает в параметрах экшен, который мы откуда-то послали.
    // здесь мы можем вызвать запрос на сервер, в данном случае, чтобы достать юзеров.
    // в action можно передавать любой необходимый payload, например - параметры для запроса на сервер
    switchMap((action: GetUsersAction) => {
      console.log('GET_USERS EFFECT', action);
      return this.userService.getUsers();
    }),
    // следующий оператор switchMap сработает после того, как завершится запрос на сервер, который мы
    // отправили в предудещем switchMap.
    // здесь можно любым образом обработать полученные данные и сохранить в стор.
    // последний оператор в pipe (switchMap, mergeMap, catchError) должен возвращать либо
    // Observable с новым экшеном, либо массив экшенов. Таким образом можно вызвать цепочку эффектов.
    switchMap((users: User[]) => {
      console.log('RESPONSE IN GET_USERS EFFECT', users);
      return [new SetUsersAction(users)];
    }),
    // последним оператором желательно добавлять catchError, если в эффекте есть вызов HTTP.
    // Тут можно обработать ошибку HTTP и кинуть новый экшен, либо вернуть пустой массив или of([]).
    // Если в эффекте нет catchError, но произошла ошибка, то эффект прекратит работать и больше
    // не будет вызван, даже если кинуть еще один GetUsersAction. Здесь работают те же правила
    // обработки ошибок, как и для Observable.
    catchError(() => [])
  );

  /**
   * Данный эффект сработает сразу после предыдущего, так как в GET_USERS эффекте мы кинули экшен
   * SET_USERS. Также он сработает, если просто кинуть в любом месте SetUsersAction.
   * Здесь в декораторе есть проперть dispatch: false. Это значит, что эффект является конечным
   * звеном в цепи и не должен возвращать новые экшены.
   */
  @Effect({dispatch: false})
  setUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.SET_USERS),
    tap((action: SetUsersAction) => {
      console.log('SET_USERS EFFECT', action);
    })
  );

  /**
   * В сервисе-эффекте есть конструктор, в который добавляется специальный сервис ngrx - Actions
   * @param actions$
   * @param userService
   */
  constructor(private actions$: Actions,
              private userService: UserService) {
  }
}
