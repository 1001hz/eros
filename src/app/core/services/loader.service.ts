import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';

@Injectable()
export class LoaderService {

  public loading: Subject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  start(): void {
    console.log("Start");
    this.loading.next(true);
  }

  stop(): void {
    console.log("Stop");
    this.loading.next(false);
  }

}
