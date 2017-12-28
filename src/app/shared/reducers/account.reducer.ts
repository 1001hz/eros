import { ActionReducer, Action } from '@ngrx/store';
import { CustomAction } from '../interfaces/custom-action.interface';
import { UserActions } from '../actions/user.actions';
import { IAccountState } from '../state/account.state';

let initialState: IAccountState = {
  updatingAccount: false
};

export function accountReducer(state:IAccountState = initialState, action: CustomAction = null) {
  switch (action.type) {

    case UserActions.UPDATE_USER:
      return Object.assign({}, state, {
        updatingAccount: true
      } );

    case UserActions.UPDATE_SUCCESS:
      return Object.assign({}, state, {
        updatingAccount: false
      } );

    default:
      return state;
  }
}
