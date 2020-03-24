import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/core/state';
import { AddUserAction, SetUserAction } from 'src/app/features/user-list/state/user.actions';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnDestroy {

  users: User[] = [];
  private destroy$: Subject<void> = new Subject();

  constructor(private store: Store<AppState>) {
    const users: User[] = [
      {
        username: 'admin',
        email: ''
      },
      {
        username: 'guest',
        email: ''
      }
    ];
    // добавляем в store массив юзеров
    store.dispatch(new SetUserAction(users));
    // достаем юзеров
    store.select((state: AppState) => {
      return state.userState.users;
    }).pipe(
      takeUntil(this.destroy$)
    ).subscribe((users: User[]) => {
      this.users = users;
    });
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
