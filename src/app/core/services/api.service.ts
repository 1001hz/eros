import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { IResponse } from '../../shared/interfaces/response.interface';

import { ToastService } from './toast.service';
import { LoaderService } from './loader.service';

import { APP_CONFIG } from '../../app-config/app-config.module';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { IUser } from '../../shared/models/user.interface';


interface AppState {
  user: IUser;
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
    private http: HttpClient
  ) {

    this.config = _config;


    store.select('user').subscribe( (u:IUser) => {
      this.token = u.token;
    });

  }

  makeHeaders() {
    //this.headers = new Headers({ 'Content-Type': 'application/json' });
    //this.headers.append('X-Auth-Token', this.token);
  }

  insertDataInUrl(endpoint, data) {
    Object.keys(data).forEach(function(key) {
      endpoint = endpoint.replace('{'+key+'}', data[key]);
    });
    return endpoint;
  }

  makeRequest(route, data?) {

    //let endpoint = this.config.apiEndpoint + route.path;
    let endpoint = route.path;

    switch(route.method){
      case 'GET':
        if(data) {
          endpoint = this.insertDataInUrl(endpoint, data);
        }
        return this.httpGet(endpoint);
      case 'POST':
            return this.httpPost(endpoint, data);
      case 'PATCH':
        return this.httpPatch(endpoint, data);
      case 'PUT':
        return this.httpPut(endpoint, data);
      case 'DELETE':
        return this.httpDelete(endpoint, data);
    }
  }

  httpGet(endpoint: string): Observable<any> {
    return this.http.get(endpoint);
  }

  httpPost(endpoint: string, data: any): Observable<any> {
    return this.http.post(endpoint, data);
  }

  httpPut(endpoint, data?) {
    return this.http.put(endpoint, data);
  }


  httpPatch(endpoint, data?) {
    return this.http.patch(endpoint, data);
  }

  httpDelete(endpoint, data?) {

    //this.makeHeaders();
    //let options = new RequestOptions({ headers: this.headers });
    //
    //options.body = data;

    return this.http.delete(endpoint);
  }

}
