import { Injectable } from '@angular/core';
import { CustomAction } from '../interfaces/custom-action.interface';
import { IUser } from '../models/user.interface';
import { IUpdateUserRequest } from '../interfaces/update-user-request.interface';

@Injectable()
export class UserActions {

  static UPDATE_USER = 'UPDATE_USER';
  static UPDATE_SUCCESS = 'UPDATE_SUCCESS';
  static UPDATE_FAILED = 'UPDATE_FAILED';

  constructor() {}

  updateUserBegin(updateUserRequest: IUpdateUserRequest): CustomAction {
    return {
      type: UserActions.UPDATE_USER,
      payload: updateUserRequest
    };
  }

  updateSuccess(user: IUser): CustomAction {
    return {
      type: UserActions.UPDATE_SUCCESS,
      payload: user
    };
  }

  updateFailed(): CustomAction {
    return {
      type: UserActions.UPDATE_FAILED
    }
  }

}



