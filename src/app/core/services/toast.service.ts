import { Injectable } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Store } from '@ngrx/store';
import { IToast } from '../../shared/models/toast.model';
import { ToastActions } from '../../shared/actions/toast.actions';


interface AppState {
  toasts: Array<IToast>;
}

@Injectable()
export class ToastService {

  public toasts:Subject<Array<IToast>> = new BehaviorSubject<Array<IToast>>(null);

  constructor(
    private store:Store<AppState>,
    private toastActions: ToastActions
  ) {
    this.store.select('toasts').subscribe((toasts:Array<IToast>) => {
      this.toasts.next(toasts);
    });
  }

  onSuccess(message: string): void {
    let _id = (Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000).toString();
    let toast: IToast =  {
      _id: _id,
      message: message,
      type: 'success'
    }
    this.store.dispatch(this.toastActions.addBegin(toast));

    setTimeout(() => {
      this.store.dispatch(this.toastActions.removeBegin(_id));
    }, 3000);
  }

  onError(message: string): void {
    let _id = (Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000).toString();
    let toast: IToast =  {
      _id: _id,
      message: message,
      type: 'error'
    }
    this.store.dispatch(this.toastActions.addBegin(toast));

    setTimeout(() => {
      this.store.dispatch(this.toastActions.removeBegin(_id));
    }, 3000);
  }

}
