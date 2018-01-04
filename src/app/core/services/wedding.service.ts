import { Injectable, Inject } from '@angular/core';
import { IResponse } from '../../shared/interfaces/response.interface';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { Wedding } from '../../shared/models/wedding.model';
import { Guest } from '../../shared/models/guest.model';
import { ADD_WEDDING, DELETE_WEDDING, UPDATE_WEDDING } from '../../shared/reducers/wedding.reducer';
import { ADD_GUEST, DELETE_GUEST, UPDATE_GUEST } from '../../shared/reducers/guest.reducer';
import { ApiService } from './api.service';
import { APP_CONFIG } from '../../app-config/app-config.module';
import { INewWeddingRequest } from '../../shared/interfaces/new-wedding-request.interface';


interface AppState {
  weddings: Array<Wedding>;
  guests: Array<Guest>;
}

@Injectable()
export class WeddingService {

  private config;
  public weddings:Subject<Array<Wedding>> = new BehaviorSubject<Array<Wedding>>(null);
  public guests:Subject<Array<Guest>> = new BehaviorSubject<Array<Guest>>(null);

  constructor(private store:Store<AppState>,
              private apiService:ApiService,
              @Inject(APP_CONFIG) _config) {
    this.config = _config;

    this.store.select('weddings').subscribe((weddings:Array<Wedding>) => {
      this.weddings.next(weddings);
    });

    this.store.select('guests').subscribe((guests:Array<Guest>) => {
      this.guests.next(guests);
    });
  }

  checkInvitation(weddingId, invitationId): Observable<boolean> {
    return this.apiService.makeRequest(this.config.apiRoutes.validateInvitationCode, {weddingId: weddingId, invitationId: invitationId})
      .map( result => {
        if(result.valid){
          return true;
        }
        return false;
      });
  }

  /**
   * Get all weddings from the server, put in the local store
   */

  fetchWeddings() {

    return this.apiService.makeRequest(this.config.apiRoutes.getWeddings)
      .map((weddings) => {

        weddings.map((wedding) => {
          let _wedding = new Wedding();
          // extract data from server response
          _wedding.makeFromResponse(wedding);
          // remove wedding with same ID from store (old data)
          this.store.dispatch({type: DELETE_WEDDING, payload: _wedding._id});
          // add to store
          this.store.dispatch({type: ADD_WEDDING, payload: _wedding});

        });

      })
      // TODO: returns empty array only, change to return array of weddings
      .reduce((acc, cur) => {
        return Object.assign([], acc, cur);
      }, []);
  }


  getWeddingById(weddingId):Observable<Wedding> {
    return this.store.select('weddings')
      .flatMap((weddings:Array<Wedding>) => {
        return Observable.from(weddings)
          .filter(wedding => wedding._id === weddingId
        );
      })
  }

  addNewWedding(weddingRequestData:INewWeddingRequest):Observable<any> {

    var myDate = new Date(weddingRequestData.date);
    weddingRequestData.date = myDate.getTime();

    return this.apiService.makeRequest(this.config.apiRoutes.addWedding, weddingRequestData)
      .map((_wedding) => {

        let wedding = new Wedding();
        wedding.makeFromResponse(_wedding);
        this.store.dispatch({type: ADD_WEDDING, payload: wedding});

        return true;

      });
  }

  update(weddingRequestData):Observable<boolean> {

    var myDate = new Date(weddingRequestData.date);
    weddingRequestData.date = myDate.getTime();

    return this.apiService.makeRequest(this.config.apiRoutes.updateWedding, weddingRequestData)
      .map((_wedding) => {

        let wedding = new Wedding();
        wedding.makeFromResponse(_wedding);

        this.store.dispatch({type: UPDATE_WEDDING, payload: wedding});

        return true;

      });
  }

  remove(weddingId:string):Observable<boolean> {

    var weddingDeleteData = {_id: weddingId};
    return this.apiService.makeRequest(this.config.apiRoutes.removeWedding, weddingDeleteData)
      .map((_wedding) => {

        this.store.dispatch({type: DELETE_WEDDING, payload: _wedding._id});

        return true;

      });
  }

  fetchGuests(weddingId: string) {
      let data = {
        weddingId: weddingId
      };
    return this.apiService.makeRequest(this.config.apiRoutes.getGuests, data)
      .map((guests) => {

        guests.map((guest) => {
          let _guest = new Guest();
          // extract data from server response
          _guest.makeFromResponse(guest);
          // remove wedding with same ID from store (old data)
          this.store.dispatch({type: DELETE_GUEST, payload: _guest._id});
          // add to store
          this.store.dispatch({type: ADD_GUEST, payload: _guest});
        })
      })
  }

  //
  //getAllGuests(weddingId: string) {
  //
  //  let _guests:Array<Guest> = [];
  //
  //  let data = {
  //    weddingId: weddingId
  //  };
  //
  //  return this.apiService.makeRequest(this.config.apiRoutes.getGuests, data)
  //    .map((guests) => {
  //
  //      guests.map((guest) => {
  //        let _guest = new Guest();
  //        // extract data from server response
  //        _guest.makeFromResponse(guest);
  //        // remove wedding with same ID from store (old data)
  //        this.store.dispatch({type: DELETE_GUEST, payload: _guest._id});
  //        // add to store
  //        this.store.dispatch({type: ADD_GUEST, payload: _guest});
  //      })
  //    })
  //}
}
