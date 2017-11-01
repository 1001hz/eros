import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { IResponse } from '../../shared/interfaces/response';

import { ToastService } from './toast.service';

@Injectable()
export class ApiService {

  constructor(private toastService: ToastService) { }

  httpGet(): Observable<IResponse> {
    let response: IResponse = {
      data: {}
    };

    let error = null;

    if(error){
      this.toastService.onError(error);
      return Observable.throw('Server error');
    }else {
      return Observable.of(response);
    }

  }

  httpPut() {
    let response: IResponse = {
      data: {}
    };

    let error = null;

    if(error){
      this.toastService.onError(error);
      return Observable.throw('Server error');
    }else {
      return Observable.of(response);
    }
  }

}
