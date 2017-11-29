import { ActionReducer, Action } from '@ngrx/store';
import { IUser } from '../models/user.interface';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';
export const UPDATE_USER = 'UPDATE_USER';

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}

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

    case UPDATE_USER:
      return Object.assign({}, state, action.payload );

    default:
      return state;
  }
}
