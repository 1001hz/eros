import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs/Rx.d';
import { User } from '../../shared/models/user.model';
import { IResponse } from '../../shared/interfaces/response';
import { ApiService } from './api.service';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(
    private apiService: ApiService,
    private userService: UserService
    ) {
  }

  login(): Observable<boolean> {
    return this.apiService.httpGet()
      .map( (response: IResponse) => {
        return this.userService.setUser(response);
    });
  }

  logout(): Observable<boolean> {
    return this.apiService.httpGet()
      .map( () => {
        return this.userService.resetUser();
      });
  }

  signup() {

  }

  resetPassword() {

  }

}
