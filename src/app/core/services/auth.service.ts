import { Injectable, Inject } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Rx.d';
import { User } from '../../shared/models/user.model';
import {
  IResponse,
  ILoginRequest,
  ISignUpRequest,
  IResetPasswordLinkRequest,
  IResetPasswordRequest } from '../../shared/interfaces';
import { ApiService } from './api.service';
import { UserService } from './user.service';

import { APP_CONFIG } from '../../app-config/app-config.module';

@Injectable()
export class AuthService {

  private config;

  constructor(
    private apiService: ApiService,
    private userService: UserService,
    @Inject(APP_CONFIG) _config
    ) {
    this.config = _config;
  }

  login(email: string, password: string): Observable<boolean> {

    let data: ILoginRequest = {
      email: email,
      password: password
    };

    return this.apiService.makeRequest(this.config.apiRoutes.login, data)
      .map( (response: IResponse) => {
        let user: User = this.userService.setUserFromServerResponse(response);
        localStorage.setItem(this.config.tokenKey, user.token);
        return true;
    });
  }

  logout(): Observable<any> {
    return this.apiService.makeRequest(this.config.apiRoutes.logout)
      .map( () => {
        localStorage.removeItem(this.config.tokenKey);
        this.userService.resetUser();
      });
  }

  tokenLogin(): Promise<any> {

    let token = localStorage.getItem(this.config.tokenKey);

    if(token) {

      let data = {
        token: token
      };

      return this.apiService.makeRequest(this.config.apiRoutes.tokenLogin, data)
        .toPromise()
        .then((response: IResponse) => {
          let user: User = this.userService.setUserFromServerResponse(response);
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

    return this.apiService.makeRequest(this.config.apiRoutes.signUp, data)
      .map( (response: IResponse) => {
        let user: User = this.userService.setUserFromServerResponse(response);
        localStorage.setItem(this.config.tokenKey, user.token);
        return true;
      });
  }

  resetPasswordLink(email: string): Observable<boolean> {

    let data: IResetPasswordLinkRequest = {
      email: email
    };

    return this.apiService.makeRequest(this.config.apiRoutes.resetPasswordLink, data)
      .map( ()=> {
        return true;
      });
  }

  resetPassword(password: string, token: string): Observable<boolean> {

    let data: IResetPasswordRequest = {
      password: password,
      token: token
    };

    return this.apiService.makeRequest(this.config.apiRoutes.resetPassword, data)
      .map( ()=> {
        return true;
      })
  }

}
