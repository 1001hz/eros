import { Observable } from 'rxjs/Rx';

export class AuthServiceStub {

  public resetPasswordLink(email: string):Observable<boolean> {
    return Observable.of(true);
  }

  public login(email: string, password: string): Observable<boolean> {
    return Observable.of(true);
  }

  public resetPassword(password: string, token: string): Observable<boolean> {
    return Observable.of(true);
  }

  public signup(email: string, password: string): Observable<boolean> {
    return Observable.of(true);
  }
}
