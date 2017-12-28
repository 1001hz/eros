import { Injectable, Inject } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { UserService } from '../../core/services/user.service';
import { Router } from '@angular/router';
import { CustomAction } from '../interfaces/custom-action.interface';
import { UserActions } from '../actions/user.actions';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG } from '../../app-config/app-config.module';
import { IUser } from '../models/user.interface';
import { IUpdateUserRequest } from '../interfaces/update-user-request.interface';

@Injectable()
export class UserEffects {


  @Effect() updateUserBegin$ = this.actions$
    .ofType(UserActions.UPDATE_USER)
    .switchMap( (action: CustomAction) => {

      let updateUserRequest: IUpdateUserRequest = action.payload;
      return this.http.patch<IUser>(this.config.apiRoutes.userUpdate.path, updateUserRequest)
        .switchMap( (user: IUser) => {

          return Observable.of(this.userActions.updateSuccess(user));
      });
    })
    .catch(() => of(this.userActions.updateFailed()));


  private config;

  constructor(
    private userActions: UserActions,
    @Inject(APP_CONFIG) _config,
    private http: HttpClient,
    private actions$: Actions)
  {
    this.config = _config;
  }

}
