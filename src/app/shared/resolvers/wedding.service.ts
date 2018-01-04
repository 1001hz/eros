import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { WeddingService } from '../../core/services/wedding.service';
import { Wedding } from '../models/wedding.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
//export class WeddingResolve implements Resolve<Promise<Array<Wedding>>> {
export class WeddingResolve implements Resolve<any> {

  constructor(private weddingService: WeddingService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.weddingService.fetchWeddings().first();
  }

}
