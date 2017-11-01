import { Injectable } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Injectable()
export class ToastService {

  constructor() {

  }

  onSuccess(message: string) {
    alert('Success Toast' + message);
  }

  onError(message: string) {
    alert('Error Toast' + message);
  }

}
