import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { IUser } from '../../shared/models/user.interface';
import {
  IResponse,
  ILoginRequest,
  ISignUpRequest,
  IResetPasswordLinkRequest,
  IResetPasswordRequest } from '../../shared/interfaces';
import { UserService } from './user.service';
import { APP_CONFIG } from '../../app-config/app-config.module';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { LOGIN_SUCCESS } from '../../shared/reducers/user.reducer';
import { AuthActions } from '../../shared/actions/auth.actions';

interface IAuth {
  loggingIn: boolean;
  loginSuccess: boolean;
}

interface AppState {
  auth: IAuth
}

@Injectable()
export class AuthService {

  private config;

  constructor(
    private store: Store<AppState>,
    private http: HttpClient,
    private userService: UserService,
    @Inject(APP_CONFIG) _config
    ) {
    this.config = _config;
  }


  login(loginRequest: ILoginRequest) {

    this.store.dispatch({
      type: AuthActions.LOGIN_BEGIN,
      payload: loginRequest
    });
  }


  logout() {

    this.store.dispatch({
      type: AuthActions.LOGOUT_BEGIN
    });
  }


  setUser(user) {
    localStorage.setItem(this.config.tokenKey, user.token);
    this.userService.setUser(user);
  }

  resetUser() {
    localStorage.removeItem(this.config.tokenKey);
    this.userService.resetUser();
  }




  tokenLogin(): Promise<any> {

    let token = localStorage.getItem(this.config.tokenKey);

    if(token) {

      let data = {
        token: token
      };

      return this.http.post<IUser>(this.config.apiRoutes.tokenLogin.path, data)
        .toPromise()
        .then((user: IUser) => {
          this.userService.setUser(user);
          localStorage.setItem(this.config.tokenKey, user.token);
        })
        .catch((err: any) => Promise.resolve());
    }
    else{
      return Promise.resolve();
    }
  }

  signup(email: string, password: string): Observable<boolean> {

    let data: ISignUpRequest = {
      email: email,
      password: password
    };

    return this.http.post<IUser>(this.config.apiRoutes.signUp.path, data)
      .map( (user: IUser) => {
        this.userService.setUser(user);
        localStorage.setItem(this.config.tokenKey, user.token);
        return true;
      });
  }

  resetPasswordLink(email: string): Observable<boolean> {

    let data: IResetPasswordLinkRequest = {
      email: email
    };

    return this.http.post(this.config.apiRoutes.resetPasswordLink.path, data)
      .map( ()=> {
        return true;
      });
  }

  resetPassword(password: string, token: string): Observable<boolean> {

    let data: IResetPasswordRequest = {
      password: password,
      token: token
    };

    return this.http.post(this.config.apiRoutes.resetPassword.path, data)
      .map( ()=> {
        return true;
      })
  }

}
