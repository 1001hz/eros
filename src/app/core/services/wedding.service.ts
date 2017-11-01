import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Wedding } from '../../shared/models/wedding.model';
import { ADD_WEDDING } from '../../shared/reducers/wedding.reducer';
import { ApiService } from './api.service';

interface AppState {
  weddings: Array<Wedding>;
}

@Injectable()
export class WeddingService {

  public weddings: Subject<Array<Wedding>> = new BehaviorSubject<Array<Wedding>>(new Array<Wedding>());

  constructor(
    private store: Store<AppState>,
    private apiService: ApiService
  ) {
    this.store.select('weddings').subscribe( (weddings:Array<Wedding>) => {
      this.weddings.next(weddings);
    } );
  }

  getAllWeddings() {
    return this.weddings;
  }

  addNewWedding(weddingData) {
    let wedding = new Wedding();
    this.apiService.httpPut().subscribe( (response) => {
      response.data._id = '12312';
      response.data.date = '12/12/99';

      wedding.makeFromResponse(response.data);
      this.store.dispatch({ type: ADD_WEDDING, payload: wedding });
    });

  }

}
