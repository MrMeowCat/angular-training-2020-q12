import { ActionReducer } from '@ngrx/store';
import { UserActions, UserActionTypes } from 'src/app/features/user-list/state/user.actions';
import { User } from 'src/app/models/user.model';

export interface UserState {
  users: User[];
}

const initialUserState: UserState = {
  users: []
};

export const userReducer: ActionReducer<UserState> = (state: UserState = initialUserState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return {...state, users: action.users};
    case UserActionTypes.ADD_USER:
      return {...state, users: [...state.users, action.user]};
    default:
      return state;
  }
};
