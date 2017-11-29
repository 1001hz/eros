import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AuthService } from '../../core/services/auth.service';
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
        .switchMap( (user) => {
          return Observable.of({type: AuthActions.LOGIN_SUCCESS, payload: user});
      });
    })
    .catch(() => of({ type: AuthActions.LOGIN_FAILED }));


  @Effect() loginSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGIN_SUCCESS)
    .switchMap( (action: CustomAction) => {

      var user = action.payload;

      // set the user
      this.authService.setUser(user);

      return Observable.of({type: AuthActions.USER_SET});
    }
  );

  @Effect() userSet$: Observable<Action> = this.actions$
    .ofType(AuthActions.USER_SET)
    .switchMap( () => {

      // redirect after user is set
      this.router.navigate(['cms']);

      return Observable.of({type: AuthActions.LOGIN_FINISHED});
    }
  );

  @Effect() logoutBegin$ = this.actions$
    .ofType(AuthActions.LOGOUT_BEGIN)
    .switchMap( (action: CustomAction) => {
      return this.http.get(this.config.apiRoutes.logout.path)
        .switchMap( () => {
          return Observable.of({type: AuthActions.LOGOUT_SUCCESS});
        });
    })
    .catch(() => of({ type: AuthActions.LOGOUT_FAILED }));


  @Effect() logoutSuccess$: Observable<Action> = this.actions$
    .ofType(AuthActions.LOGOUT_SUCCESS)
    .switchMap( (action: CustomAction) => {

      // set the user
      this.authService.resetUser();

      return Observable.of({type: AuthActions.USER_RESET});
    }
  );

  @Effect() userReset$: Observable<Action> = this.actions$
    .ofType(AuthActions.USER_RESET)
    .switchMap( () => {

      // redirect to login after user is reset
      this.router.navigate(['auth','login']);

      return Observable.of({type: AuthActions.LOGOUT_FINISHED});
    }
  );

  private config;

  constructor(
    @Inject(APP_CONFIG) _config,
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
    private actions$: Actions)
  {
    this.config = _config;
  }

}
