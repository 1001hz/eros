import { ActionReducer, Action } from '@ngrx/store';
import { CustomAction } from '../interfaces/custom-action.interface';
import { AuthActions } from '../actions/auth.actions';
import { IAuthState } from '../state/auth.state';

let initialState: IAuthState = {
  loggingIn: false,
  signingUp: false,
  resettingPassword: false,
  requestingPasswordLink: false
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

    case AuthActions.PASSWORD_RESET_BEGIN:
      return Object.assign({}, state, {
        resettingPassword: true
      } );
    
    case AuthActions.PASSWORD_RESET_FINISHED:
      return Object.assign({}, state, {
        resettingPassword: false
      } );

    case AuthActions.PASSWORD_RESET_LINK_BEGIN:
    return Object.assign({}, state, {
      requestingPasswordLink: true
    } );
  
  case AuthActions.PASSWORD_RESET_LINK_FINISHED:
    return Object.assign({}, state, {
      requestingPasswordLink: false
    } );
    
    default:
      return state;
  }
}
