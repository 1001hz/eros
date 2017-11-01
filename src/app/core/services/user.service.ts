import { Injectable } from '@angular/core';
import { IResponse } from '../../shared/interfaces/response';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { User } from '../../shared/models/user.model';
import { UPDATE_USER, SET_USER, RESET_USER } from '../../shared/reducers/user.reducer';

interface AppState {
  user: User;
}

@Injectable()
export class UserService {

  public user: Subject<User> = new BehaviorSubject<User>(new User());

  constructor(private store: Store<AppState>) {
    this.store.select('user').subscribe( (u:User) => {
      this.user.next(u);
    } );
  }

  setUser(response: IResponse): boolean {
    let _user = new User();
    //TODO: remove
    response.data._id = '3123';
    response.data.email = '1001hz@';
    response.data.firstName = 'John';
    response.data.lastName = 'Hughes';
    response.data.weddingIds = ['asdasd'];

    _user.makeFromResponse(response.data);
    this.store.dispatch({ type: SET_USER, payload: _user });

    return true;
  }

  resetUser(): boolean {
    this.store.dispatch({ type: RESET_USER });

    return true;
  }

  getUser() {
    return this.user;
  }

}
