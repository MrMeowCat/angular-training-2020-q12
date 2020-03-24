import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum UserActionTypes {
  SET_USER = 'SET_USER',
  ADD_USER = 'ADD_USER'
}

export class SetUserAction implements Action {
  type: UserActionTypes.SET_USER = UserActionTypes.SET_USER;
  constructor(public users: User[]) {
  }
}

export class AddUserAction implements Action {
  type: UserActionTypes.ADD_USER = UserActionTypes.ADD_USER;
  constructor(public user: User) {
  }
}

export type UserActions = SetUserAction | AddUserAction;
