import { ActionReducer, Action } from '@ngrx/store';
import { Wedding } from '../models/wedding.model';

export const ADD_WEDDING = 'ADD_WEDDING';
export const DELETE_WEDDING = 'DELETE_WEDDING';
export const UPDATE_WEDDING = 'UPDATE_WEDDING';

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

    case UPDATE_WEDDING:
      let index = state.map(wedding => wedding._id)
        .indexOf(action.payload._id);

      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], action.payload),
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
}
