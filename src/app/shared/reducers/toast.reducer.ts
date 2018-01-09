import { ActionReducer, Action } from '@ngrx/store';
import { CustomAction } from '../interfaces/custom-action.interface';
import { ToastActions } from '../actions/toast.actions';
import { IToast } from '../models/toast.model';

export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const UPDATE_GUEST = 'UPDATE_GUEST';

let initialState = [];


export function toastReducer(state: Array<IToast> = initialState, action: CustomAction = null) {
  switch (action.type) {

    case ToastActions.ADD:
      return [...state, action.payload];

    case ToastActions.REMOVE:
      return state.filter(toast => {
        if (action.payload !== toast._id) {
          return toast;
        }
      });

    default:
      return state;
  }
}
