import {Injectable, Inject} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import { LoaderService } from '../services/loader.service';
import { APP_CONFIG } from '../../app-config/app-config.module';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  private authToken;
  private config;

  constructor(
    @Inject(APP_CONFIG) _config,
    private userService: UserService,
    private loaderService: LoaderService
  ) {
    this.config = _config;
    userService.user.subscribe(_user => this.authToken = _user.token);
  }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Clone the request to add the new header.
    const authReq = req.clone({headers: req.headers.set('X-Auth-Token', this.authToken)});

    // CLone new request to add API endpoint
    const apiReq = authReq.clone({ url: `${this.config.apiEndpoint}${req.url}` });

    // Pass on the cloned request instead of the original request.
    return next.handle(apiReq)
      .catch(err => {
        if (err instanceof HttpErrorResponse) {
          console.log("From interceptor", err);
          return Observable.throw(err.message || 'Server error');
        }
      })
  }


}
