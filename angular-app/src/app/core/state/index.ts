import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from 'src/app/features/user-list/state/user.reducer';

export interface AppState {
  userState: UserState;
}

export const reducerMap: ActionReducerMap<AppState> = {
  userState: userReducer
};
