import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Wedding } from '../../shared/models/wedding.model';

export class WeddingServiceStub {
  public getAllWeddings():Subject<Array<Wedding>> {
    let wedding = new Wedding();
    let weddings: Subject<Array<Wedding>> = new BehaviorSubject<Array<Wedding>>(null);
    weddings.next([wedding]);
    return weddings;
  }
}
