import { Injectable } from '@angular/core';
import { IResponse } from '../../shared/interfaces/response.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { IUser } from '../../shared/models/user.interface';
import { UPDATE_USER, SET_USER, RESET_USER } from '../../shared/reducers/user.reducer';

interface AppState {
  user: IUser;
}

@Injectable()
export class UserService {

  public user: Subject<IUser> = new BehaviorSubject<IUser>(null);

  constructor(private store: Store<AppState>) {
    this.store.select('user').subscribe( (u:IUser) => {
      this.user.next(u);
    } );
  }

  setUser(user: IUser): void {
    this.store.dispatch({ type: SET_USER, payload: user });
  }

  resetUser(): void {
    // remove user from store
    this.store.dispatch({ type: RESET_USER });
  }

}
