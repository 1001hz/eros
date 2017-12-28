import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { CustomAction } from '../interfaces/custom-action.interface';
import { AuthActions } from '../actions/auth.actions';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../app-config/app-config.module';
import { IUser } from '../models/user.interface';

@Injectable()
export class AuthEffects {


  @Effect() loginBegin$ = this.actions$
    .ofType(AuthActions.LOGIN_BEGIN)
    .switchMap( (action: CustomAction) => {
      return this.http.post<IUser>(this.config.apiRoutes.login.path, action.payload)
        .switchMap( (user: IUser) => {
          return Observable.of(this.authActions.loginSuccess(user));
      });
    })
    .catch(() => of(this.authActions.loginFailed()));


  @Effect() loginSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN_SUCCESS)
    .switchMap( (action: CustomAction) => {

      // set user
      this.userService.setUser(action.payload);

      // redirect
      this.router.navigate(['cms']);

      return Observable.of(this.authActions.loginFinished());
    });




  @Effect() logoutBegin$ = this.actions$
    .ofType(AuthActions.LOGOUT_BEGIN)
    .switchMap( (action: CustomAction) => {
      return this.http.get(this.config.apiRoutes.logout.path)
        .switchMap( () => {
          return Observable.of(this.authActions.logoutSuccess());
        });
    })
    .catch(() => of(this.authActions.logoutFailed()));


  @Effect() logoutSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGOUT_SUCCESS)
    .switchMap( (action: CustomAction) => {

      // set the user
      this.userService.resetUser();

      // redirect to login after user is reset
      this.router.navigate(['auth','login']);

      return Observable.of(this.authActions.logoutFinished());
    }
  );

  @Effect() signupBegin$ = this.actions$
    .ofType(AuthActions.SIGNUP_BEGIN)
    .switchMap( (action: CustomAction) => {
      return this.http.post<IUser>(this.config.apiRoutes.signUp.path, action.payload)
        .switchMap( (user: IUser) => {
          return Observable.of(this.authActions.signupSuccess(user));
        });
    })
    .catch(() => of(this.authActions.signupFailed()));


  @Effect() signupSuccess$ = this.actions$
    .ofType(AuthActions.SIGNUP_SUCCESS)
    .switchMap( (action: CustomAction) => {

      // set user
      this.userService.setUser(action.payload);

      // redirect
      this.router.navigate(['cms']);

      return Observable.of(this.authActions.signupFinished());
    });


  private config;

  constructor(
    private authActions: AuthActions,
    @Inject(APP_CONFIG) _config,
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private actions$: Actions)
  {
    this.config = _config;
  }

}
