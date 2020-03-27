import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export enum UserActionTypes {
  GET_USERS = 'GET_USERS',
  SET_USERS = 'SET_USERS',
  ADD_USER = 'ADD_USER'
}

export class GetUsersAction implements Action {
  type: UserActionTypes.GET_USERS = UserActionTypes.GET_USERS;
}

export class SetUsersAction implements Action {
  type: UserActionTypes.SET_USERS = UserActionTypes.SET_USERS;
  constructor(public users: User[]) {
  }
}

export class AddUserAction implements Action {
  type: UserActionTypes.ADD_USER = UserActionTypes.ADD_USER;
  constructor(public user: User) {
  }
}

export type UserActions = GetUsersAction | SetUsersAction | AddUserAction;
