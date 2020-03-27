import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/core/state';
import { AddUserAction, GetUsersAction } from 'src/app/features/user-list/state/user.actions';
import { UserState } from 'src/app/features/user-list/state/user.reducer';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnDestroy {

  users: User[] = [];
  usersLoading$: Observable<boolean>;
  private destroy$: Subject<void> = new Subject();

  constructor(private store: Store<AppState>) {
    // кидаем экшен, чтобы достать юзеров через API, должен сработать эффект для этого экшена
    store.dispatch(new GetUsersAction());
    // достаем юзеров
    store.select((state: AppState) => {
      return state.userState.users;
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe((users: User[]) => {
      this.users = users;
    });

    // Еще 1 способ создать селектор - с помощью строкового ключа
    this.usersLoading$ = store.select('userState').pipe(
      map((state: UserState) => state.usersLoading)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addUser(): void {
    this.store.dispatch(new AddUserAction({
      username: 'User',
      email: ''
    }));
  }
}
