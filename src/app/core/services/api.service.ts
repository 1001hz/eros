import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { IResponse } from '../../shared/interfaces/response.interface';

import { ToastService } from './toast.service';
import { LoaderService } from './loader.service';

import { APP_CONFIG } from '../../app-config/app-config.module';

@Injectable()
export class ApiService {

  private config;

  constructor(
    private loaderService: LoaderService,
    private toastService: ToastService,
    @Inject(APP_CONFIG) _config
  ) {
    this.config = _config;
  }

  makeRequest(route, data?) {

    let endpoint = this.config.apiEndpoint + route.path;

    switch(route.method){
      case 'GET':
            return this.httpGet(endpoint);
      case 'POST':
            return this.httpPost(endpoint, data);
    }
  }

  httpGet(path: string): Observable<IResponse> {

    console.log('Hitting '+path);

    let response: IResponse = {
      data: {}
    };

    let error = null;
    this.loaderService.start();

    if(error){
      this.loaderService.stop();
      this.toastService.onError(error);
      return Observable.throw('Server error');
    }else {
      setTimeout( () => {
        this.loaderService.stop();
      }, 1000);
      return Observable.of(response).delay(1000);
    }

  }

  httpPost(path: string, data: any): Observable<IResponse> {

    console.log("Hitting " + path + " with " + JSON.stringify(data));

    let response: IResponse = {
      data: {}
    };

    let error = null;

    this.loaderService.start();

    if(error){
      this.loaderService.stop();
      this.toastService.onError(error);
      return Observable.throw('Server error');
    }else {
      setTimeout( () => {
        this.loaderService.stop();
      }, 1000);
      return Observable.of(response).delay(1000);
    }
  }

  httpPut(endpoint?, data?) {

    console.log("sending to " + endpoint + " with " + data);

    let response: IResponse = {
      data: {}
    };

    let error = null;

    this.loaderService.start();

    if(error){
      this.loaderService.stop();
      this.toastService.onError(error);
      return Observable.throw('Server error');
    }else {
      setTimeout( () => {
        this.loaderService.stop();
      }, 1000);
      return Observable.of(response).delay(1000);
    }
  }

}
