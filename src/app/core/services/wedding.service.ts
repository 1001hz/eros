import { Injectable, Inject } from '@angular/core';
import { IResponse } from '../../shared/interfaces/response.interface';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Wedding } from '../../shared/models/wedding.model';
import { ADD_WEDDING, DELETE_WEDDING, UPDATE_WEDDING } from '../../shared/reducers/wedding.reducer';
import { ApiService } from './api.service';
import { APP_CONFIG } from '../../app-config/app-config.module';
import { INewWeddingRequest } from '../../shared/interfaces/new-wedding-request.interface';


interface AppState {
  weddings: Array<Wedding>;
}

@Injectable()
export class WeddingService {

  private config;
  public weddings: Subject<Array<Wedding>> = new BehaviorSubject<Array<Wedding>>(null);

  constructor(
    private store: Store<AppState>,
    private apiService: ApiService,
    @Inject(APP_CONFIG) _config
  ) {
    this.config = _config;
    this.store.select('weddings').subscribe( (weddings:Array<Wedding>) => {
      this.weddings.next(weddings);
    } );
  }

  /**
   * Get all weddings from the server, put in the local store, and return a promise
   */
  getAllWeddings(): Promise<Array<Wedding>> {

    let _weddings:Array<Wedding> = [];

    return this.apiService.makeRequest(this.config.apiRoutes.getWeddings)
      .map( (response) => {

        response.weddings.map( (wedding) => {
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

  addNewWedding(weddingRequestData: INewWeddingRequest): void {

    this.apiService.makeRequest(this.config.apiRoutes.addWedding).subscribe( (response) => {

      //TODO remove
      response.data._id = '12312';
      response.data.date = weddingRequestData.date;
      response.data.name = weddingRequestData.name;
      let wedding = new Wedding();

      wedding.makeFromResponse(response.data);
      this.store.dispatch({ type: ADD_WEDDING, payload: wedding });

    });

  }

  update(weddingRequestData): Observable<boolean> {

    return this.apiService.makeRequest(this.config.apiRoutes.updateWedding, weddingRequestData)
      .map( (response) => {

      //TODO remove
      response.data._id = weddingRequestData._id;
      response.data.date = weddingRequestData.date;
      response.data.name = weddingRequestData.name;
      let wedding = new Wedding();
      wedding.makeFromResponse(response.data);

      this.store.dispatch({ type: UPDATE_WEDDING, payload: wedding });

      return true;

    });

  }

}
