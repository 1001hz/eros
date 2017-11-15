import { Injectable } from '@angular/core';
import { IResponse } from '../../shared/interfaces/response.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { User } from '../../shared/models/user.model';
import { UPDATE_USER, SET_USER, RESET_USER } from '../../shared/reducers/user.reducer';

interface AppState {
  user: User;
}

@Injectable()
export class UserService {

  public user: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private store: Store<AppState>) {
    this.store.select('user').subscribe( (u:User) => {
      this.user.next(u);
    } );
  }

  setUserFromServerResponse(response): User {

    let _user = new User();

    // extract data from server response
    _user.makeFromResponse(response);

    // add to store
    this.store.dispatch({ type: SET_USER, payload: _user });

    return _user;
  }

  resetUser(): void {

    // remove user from store
    this.store.dispatch({ type: RESET_USER });
  }

  getUser(): Subject<User> {
    return this.user;
  }

}
