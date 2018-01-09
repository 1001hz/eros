import { Injectable } from '@angular/core';
import { CustomAction } from '../interfaces/custom-action.interface';
import { IToast } from '../models/toast.model';

@Injectable()
export class ToastActions {

  static ADD = 'ADD';
  static REMOVE = 'REMOVE';

  constructor() {}

  addBegin(toast: IToast): CustomAction {
    return {
      type: ToastActions.ADD,
      payload: toast
    };
  }

  removeBegin(toastId: string): CustomAction {
    return {
      type: ToastActions.REMOVE,
      payload: toastId
    };
  }

}



