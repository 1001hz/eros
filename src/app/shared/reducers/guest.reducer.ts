import { ActionReducer, Action } from '@ngrx/store';
import { Guest } from '../models/guest.model';

export const ADD_GUEST = 'ADD_GUEST';
export const DELETE_GUEST = 'DELETE_GUEST';
export const UPDATE_GUEST = 'UPDATE_GUEST';

export interface CustomAction extends Action {
  type: string;
  payload?: any;
}

export function guestReducer(state: Array<Guest> = [], action: CustomAction = null) {
  switch (action.type) {

    case ADD_GUEST:
      return [...state, action.payload];

    case DELETE_GUEST:
      return state.filter(guest => {
        if (action.payload !== guest._id) {
          return guest;
        }
      });

    case UPDATE_GUEST:
      let index = state.map(guest => guest._id)
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
