import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserService } from '../../core/services/user.service';
import { ToastService } from '../../core/services/toast.service';
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
      })
      .catch((error) => of(this.authActions.loginFailed(error)));
    });


  @Effect() loginSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN_SUCCESS)
    .switchMap( (action: CustomAction) => {

      // set user
      this.userService.setUser(action.payload);

      // redirect
      this.router.navigate(['cms']);

      // notify the user
      this.toastService.onSuccess("Login successful");

      return Observable.of(this.authActions.loginFinished());
    });


  @Effect() loginFailed$ = this.actions$
    .ofType(AuthActions.LOGIN_FAILED)
    .switchMap( (action: CustomAction) => {
      this.toastService.onError(action.payload);
      return Observable.of(this.authActions.loginFinished());
    });


  @Effect() logoutBegin$ = this.actions$
    .ofType(AuthActions.LOGOUT_BEGIN)
    .switchMap( (action: CustomAction) => {
      return this.http.get(this.config.apiRoutes.logout.path)
        .switchMap( () => {
          return Observable.of(this.authActions.logoutSuccess());
        })
        .catch(() => of(this.authActions.logoutFailed()));
    })
    


  @Effect({dispatch: false}) logoutFailed$ = this.actions$
  .ofType(AuthActions.LOGOUT_FAILED)
  .switchMap( (action: CustomAction) => {
    this.toastService.onError(action.payload);
    return Observable.of({});
  });


  @Effect() logoutSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGOUT_SUCCESS)
    .switchMap( (action: CustomAction) => {

      // set the user
      this.userService.resetUser();

      // redirect to login after user is reset
      this.router.navigate(['auth','login']);

      // notify the user
      this.toastService.onSuccess("Logout successful");

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

      // notify the user
      this.toastService.onSuccess("Your account has been created");

      return Observable.of(this.authActions.signupFinished());
    });


    /*********** PASSWORD RESET LINK REQUEST ***********/

    @Effect() passwordResetLinkBegin$ = this.actions$
    .ofType(AuthActions.PASSWORD_RESET_LINK_BEGIN)
    .switchMap( (action: CustomAction) => {

      return this.http.post<string>(this.config.apiRoutes.resetPasswordLink.path, action.payload)
        .switchMap( (message: string) => {
          return Observable.of(this.authActions.passwordResetLinkSuccess(message));
        })
        .catch((error) => of(this.authActions.passwordResetLinkFailed(error)));

    })
    



    @Effect() passwordResetLinkSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.PASSWORD_RESET_LINK_SUCCESS)
    .switchMap( (action: CustomAction) => {
  
      // redirect
      this.router.navigate(['/auth','login']);

      // notify user
      this.toastService.onSuccess(action.payload);

      return Observable.of(this.authActions.passwordResetLinkFinished());
    });


    @Effect() passwordResetLinkFailed$: any = this.actions$
    .ofType(AuthActions.PASSWORD_RESET_LINK_FAILED)
    .switchMap( (action: CustomAction) => {

      // notify user
      this.toastService.onError(action.payload);
      return Observable.of(this.authActions.passwordResetLinkFinished());
    });


    /*********** PASSWORD RESET ************/

  @Effect() passwordResetBegin$ = this.actions$
    .ofType(AuthActions.PASSWORD_RESET_BEGIN)
    .switchMap( (action: CustomAction) => {

      return this.http.post<IUser>(this.config.apiRoutes.resetPassword.path, action.payload)
        .switchMap( (user: IUser) => {
          return Observable.of(this.authActions.passwordResetSuccess(user));
        });

    })
    .catch(() => of(this.authActions.passwordResetFailed()));


    @Effect() passwordResetSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.PASSWORD_RESET_SUCCESS)
    .switchMap( (action: CustomAction) => {

      // redirect
      this.router.navigate(['/auth','login']);

      // notify the user
      this.toastService.onSuccess("Your password has been reset");

      return Observable.of(this.authActions.passwordResetFinished());
    });


    @Effect({dispatch: false}) passwordResetFailed$: any = this.actions$
    .ofType(AuthActions.PASSWORD_RESET_FAILED)
    .switchMap( (action: CustomAction) => {

      // notify user
      this.toastService.onError("Password reset has failed.");
      return Observable.of({});
    });


  private config;

  constructor(
    private authActions: AuthActions,
    @Inject(APP_CONFIG) _config,
    private http: HttpClient,
    private userService: UserService,
    private toastService: ToastService,
    private router: Router,
    private actions$: Actions)
  {
    this.config = _config;
  }

}
