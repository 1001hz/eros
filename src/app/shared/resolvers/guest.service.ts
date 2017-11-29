import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { WeddingService } from '../../core/services/wedding.service';
import { Guest } from '../models/guest.model';

@Injectable()
export class GuestResolve implements Resolve<any> {

  constructor(private weddingService: WeddingService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.weddingService.fetchGuests((route.paramMap.get('weddingId'))).first();
  }

}
