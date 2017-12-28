import { ActionReducer, Action } from '@ngrx/store';
import { IUser } from '../models/user.interface';
import { CustomAction } from '../interfaces/custom-action.interface';
import { UserActions } from '../actions/user.actions';

export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';

let initialState: IUser = {
  _id: '',
  email: '',
  firstName: '',
  lastName: '',
  token: ''
};

export function userReducer(state: IUser = initialState, action: CustomAction = null) {
  switch (action.type) {

    case SET_USER:
      return Object.assign({}, state, action.payload );

    case RESET_USER:
      return initialState;

    case UserActions.UPDATE_SUCCESS:
      return Object.assign({}, state, action.payload );

    default:
      return state;
  }
}
