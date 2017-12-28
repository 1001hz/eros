import { Injectable, Inject } from '@angular/core';
import { IResponse } from '../../shared/interfaces/response.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { IUser } from '../../shared/models/user.interface';
import { IAccountState } from '../../shared/state/account.state';
import { IUpdateUserRequest } from '../../shared/interfaces/update-user-request.interface';
import { SET_USER, RESET_USER } from '../../shared/reducers/user.reducer';
import { UserActions } from '../../shared/actions/user.actions';
import { APP_CONFIG } from '../../app-config/app-config.module';

interface AppState {
  user: IUser;
  account: IAccountState;
}

@Injectable()
export class UserService {

  public user: Subject<IUser> = new BehaviorSubject<IUser>(null);
  public accountState: Subject<IAccountState> = new BehaviorSubject<IAccountState>(null);
  private config;

  constructor(
    private store: Store<AppState>,
    private userActions: UserActions,
    @Inject(APP_CONFIG) _config
  ) {
      this.config = _config;

      this.store.select('user').subscribe( (u:IUser) => {
        this.user.next(u);
      } );

      this.store.select('account').subscribe( (accountState:IAccountState) => {
        this.accountState.next(accountState);
      } );
  }

  setUser(user: IUser): void {
    this.store.dispatch({ type: SET_USER, payload: user });
    localStorage.setItem(this.config.tokenKey, user.token);
  }

  resetUser(): void {
    localStorage.removeItem(this.config.tokenKey);
    this.store.dispatch({ type: RESET_USER });
  }

  updateUser(updateUserRequest: IUpdateUserRequest): void {
    this.store.dispatch(this.userActions.updateUserBegin(updateUserRequest));
  }

}
