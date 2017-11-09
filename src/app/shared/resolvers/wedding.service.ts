import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { WeddingService } from '../../core/services/wedding.service';
import { Wedding } from '../models/wedding.model';

@Injectable()
export class WeddingResolve implements Resolve<Promise<Array<Wedding>>> {

  constructor(private weddingService: WeddingService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.weddingService.getAllWeddings();
  }

}
