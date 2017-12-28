import { ActionReducer, Action } from '@ngrx/store';
import { CustomAction } from '../interfaces/custom-action.interface';
import { AuthActions } from '../actions/auth.actions';
import { IAuthState } from '../state/auth.state';

let initialState: IAuthState = {
  loggingIn: false,
  signingUp: false
};

export function authReducer(state:IAuthState = initialState, action: CustomAction = null) {
  switch (action.type) {

    case AuthActions.LOGIN_BEGIN:
      return Object.assign({}, state, {
        loggingIn: true
      } );

    case AuthActions.LOGIN_FINISHED:
      return Object.assign({}, state, {
        loggingIn: false
      } );

    default:
      return state;
  }
}
