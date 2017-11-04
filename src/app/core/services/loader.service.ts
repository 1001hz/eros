import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';

@Injectable()
export class LoaderService {

  public loading: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  start(): void {
    this.loading.next(true);
  }

  stop(): void {
    this.loading.next(false);
  }

}
