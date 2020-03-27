import { ActionReducer } from '@ngrx/store';
import { UserActions, UserActionTypes } from 'src/app/features/user-list/state/user.actions';
import { User } from 'src/app/models/user.model';

export interface UserState {
  users: User[];
  usersLoading: boolean;
}

const initialUserState: UserState = {
  users: [],
  usersLoading: false
};

export const userReducer: ActionReducer<UserState> = (state: UserState = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.GET_USERS:
      return {...state, usersLoading: true};
    case UserActionTypes.SET_USERS:
      return {...state, users: action.users, usersLoading: false};
    case UserActionTypes.ADD_USER:
      return {...state, users: [...state.users, action.user]};
    default:
      return state;
  }
};
