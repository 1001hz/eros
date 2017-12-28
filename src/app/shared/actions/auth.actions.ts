import { Injectable } from '@angular/core';
import { CustomAction } from '../interfaces/custom-action.interface';
import { IUser } from '../models/user.interface';
import { ILoginRequest, ISignUpRequest } from '../interfaces';

@Injectable()
export class AuthActions {

  static LOGIN_BEGIN = 'LOGIN_BEGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGIN_FAILED = 'LOGIN_FAILED';
  static LOGIN_FINISHED = 'LOGIN_FINISHED';

  static LOGOUT_BEGIN = 'LOGOUT_BEGIN';
  static LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
  static LOGOUT_FAILED = 'LOGOUT_FAILED';
  static LOGOUT_FINISHED = 'LOGOUT_FINISHED';

  static SIGNUP_BEGIN = 'SIGNUP_BEGIN';
  static SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  static SIGNUP_FAILED = 'SIGNUP_FAILED';
  static SIGNUP_FINISHED = 'SIGNUP_FINISHED';

  constructor() {}

  loginBegin(loginRequest: ILoginRequest): CustomAction {
    return {
      type: AuthActions.LOGIN_BEGIN,
      payload: loginRequest
    };
  }

  loginSuccess(user: IUser): CustomAction {
    return {
      type: AuthActions.LOGIN_SUCCESS,
      payload: user
    };
  }

  loginFailed(): CustomAction {
    return {
      type: AuthActions.LOGIN_FAILED
    };
  }

  loginFinished(): CustomAction {
    return {
      type: AuthActions.LOGIN_FINISHED
    };
  }


  logoutBegin(): CustomAction {
    return {
      type: AuthActions.LOGOUT_BEGIN
    };
  }

  logoutSuccess(): CustomAction {
    return {
      type: AuthActions.LOGOUT_SUCCESS
    };
  }

  logoutFailed(): CustomAction {
    return {
      type: AuthActions.LOGOUT_FAILED
    };
  }

  logoutFinished(): CustomAction {
    return {
      type: AuthActions.LOGOUT_FINISHED
    };
  }


  signupBegin(signUpRequest: ISignUpRequest): CustomAction {
    return {
      type: AuthActions.SIGNUP_BEGIN,
      payload: signUpRequest
    };
  }

  signupSuccess(user: IUser): CustomAction {
    return {
      type: AuthActions.SIGNUP_SUCCESS,
      payload: user
    };
  }

  signupFinished(): CustomAction {
    return {
      type: AuthActions.SIGNUP_FINISHED
    };
  }

  signupFailed(): CustomAction {
    return {
      type: AuthActions.SIGNUP_FAILED
    };
  }

}



