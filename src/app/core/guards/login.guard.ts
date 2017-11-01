import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from '../../../../node_modules/rxjs/Observable.d';
import { UserService } from '../services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.getUser().map( (u) => {
      return u._id ? true : false;
    }).first();
  }
}
