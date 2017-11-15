import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { IResponse } from '../../shared/interfaces/response.interface';

import { ToastService } from './toast.service';
import { LoaderService } from './loader.service';

import { APP_CONFIG } from '../../app-config/app-config.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Store } from '@ngrx/store';
import { User } from '../../shared/models/user.model';


interface AppState {
  user: User;
}

@Injectable()
export class ApiService {

  private config;
  private headers: Headers;
  private token;

  constructor(
    private loaderService: LoaderService,
    private toastService: ToastService,
    @Inject(APP_CONFIG) _config,
    private store: Store<AppState>,
    public http: Http
  ) {

    this.config = _config;


    store.select('user').subscribe( (u:User) => {
      this.token = u.token;
    } );

  }

  makeHeaders() {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.headers.append('X-Auth-Token', this.token);
  }

  makeRequest(route, data?) {

    let endpoint = this.config.apiEndpoint + route.path;

    switch(route.method){
      case 'GET':
            return this.httpGet(endpoint);
      case 'POST':
            return this.httpPost(endpoint, data);
      case 'PATCH':
        return this.httpPatch(endpoint, data);
      case 'PUT':
        return this.httpPut(endpoint, data);
    }
  }

  httpGet(endpoint: string): Observable<Response> {

    this.makeHeaders();
    let options = new RequestOptions({ headers: this.headers });

    return this.http.get(endpoint, options)
      .map((res:Response) => res.json())
      .catch( error => Observable.throw(error.json().message || 'Server error'));
  }

  httpPost(endpoint: string, data: any): Observable<IResponse> {

    this.makeHeaders();
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(endpoint, data, options)
      .map((res:Response) => res.json())
      .catch( error => Observable.throw(error.json().message || 'Server error'));
  }

  httpPut(endpoint, data?) {

    this.makeHeaders();
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(endpoint, data, options)
      .map((res:Response) => res.json())
      .catch( error => Observable.throw(error.json().message || 'Server error'));
  }


  httpPatch(endpoint, data?) {

    this.makeHeaders();
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(endpoint, data, options)
      .map((res:Response) => res.json())
      .catch( error => Observable.throw(error.json().message || 'Server error'));
  }

}
