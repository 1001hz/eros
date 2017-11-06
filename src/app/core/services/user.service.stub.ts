import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { User } from '../../shared/models/user.model';

export class UserServiceStub {
  public getUser():Subject<User> {
    let user: Subject<User> = new BehaviorSubject<User>(null);
    user.next(new User());
    return user;
  }
}
