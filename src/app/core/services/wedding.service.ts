import { Injectable, Inject } from '@angular/core';
import { IResponse } from '../../shared/interfaces/response.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
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
  public weddings: Subject<Array<Wedding>> = new BehaviorSubject<Array<Wedding>>(null);
  public guests: Subject<Array<Guest>> = new BehaviorSubject<Array<Guest>>(null);

  constructor(
    private store: Store<AppState>,
    private apiService: ApiService,
    @Inject(APP_CONFIG) _config
  ) {
    this.config = _config;

    this.store.select('weddings').subscribe( (weddings:Array<Wedding>) => {
      this.weddings.next(weddings);
    } );

    this.store.select('guests').subscribe( (guests:Array<Guest>) => {
      this.guests.next(guests);
    } );
  }

  /**
   * Get all weddings from the server, put in the local store, and return a promise
   */
  getAllWeddings(): Promise<Array<Wedding>> {

    let _weddings:Array<Wedding> = [];

    return this.apiService.makeRequest(this.config.apiRoutes.getWeddings)
      .map( (weddings) => {

        weddings.map( (wedding) => {
          let _wedding = new Wedding();
          // extract data from server response
          _wedding.makeFromResponse(wedding);
          // remove wedding with same ID from store (old data)
          this.store.dispatch({ type: DELETE_WEDDING, payload: _wedding._id });
          // add to store
          this.store.dispatch({ type: ADD_WEDDING, payload: _wedding });
          _weddings.push(wedding);
        });

        return _weddings;

    }).toPromise(); // don't want a stream here because all the data should be fetched from server before resolvers resolve
  }

  getWeddingById(weddingId): Observable<Wedding> {
    return this.store.select('weddings')
      .map( (weddings: Array<Wedding>) => {
        return weddings.find( (wedding: Wedding) => {
          return wedding._id === weddingId;
        });
      });
  }

  addNewWedding(weddingRequestData: INewWeddingRequest): Observable<any> {

    var myDate = new Date(weddingRequestData.date);
    weddingRequestData.date = myDate.getTime();

    return this.apiService.makeRequest(this.config.apiRoutes.addWedding, weddingRequestData)
      .map( (_wedding) => {

        let wedding = new Wedding();
        wedding.makeFromResponse(_wedding);
        this.store.dispatch({ type: ADD_WEDDING, payload: wedding });

        return true;

    });
  }

  update(weddingRequestData): Observable<boolean> {

    var myDate = new Date(weddingRequestData.date);
    weddingRequestData.date = myDate.getTime();

    return this.apiService.makeRequest(this.config.apiRoutes.updateWedding, weddingRequestData)
      .map( (_wedding) => {

      let wedding = new Wedding();
      wedding.makeFromResponse(_wedding);

      this.store.dispatch({ type: UPDATE_WEDDING, payload: wedding });

      return true;

    });
  }

  remove(weddingId: string): Observable<boolean> {

    var weddingDeleteData = { _id: weddingId };
    return this.apiService.makeRequest(this.config.apiRoutes.removeWedding, weddingDeleteData)
      .map( (_wedding) => {

        this.store.dispatch({ type: DELETE_WEDDING, payload: _wedding._id });

        return true;

      });
  }


  getAllGuests(weddingId: string): Promise<Array<Guest>> {

    let _guests:Array<Guest> = [];

    let data = {
      weddingId: weddingId
    };

    return this.apiService.makeRequest(this.config.apiRoutes.getGuests, data)
      .map( (guests) => {

        guests.map( (guest) => {
          let _guest = new Guest();
          // extract data from server response
          _guest.makeFromResponse(guest);
          // remove wedding with same ID from store (old data)
          this.store.dispatch({ type: DELETE_GUEST, payload: _guest._id });
          // add to store
          this.store.dispatch({ type: ADD_GUEST, payload: _guest });
          _guests.push(guest);
        });

        return _guests;

      }).toPromise(); // don't want a stream here because all the data should be fetched from server before resolvers resolve
  }

}
