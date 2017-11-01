import { ActionReducer, Action } from '@ngrx/store';
import { Wedding } from '../models/wedding.model';

export const ADD_WEDDING = 'ADD_WEDDING';
export const DELETE_WEDDING = 'DELETE_WEDDING';

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}

export function weddingReducer(state: Array<Wedding> = [], action: CustomAction = null) {
  switch (action.type) {

    case ADD_WEDDING:
      return [...state, action.payload];

    case DELETE_WEDDING:
      return state.filter(wedding => {
        if (action.payload !== wedding._id) {
          return wedding;
        }
      });

    default:
      return state;
  }
}
