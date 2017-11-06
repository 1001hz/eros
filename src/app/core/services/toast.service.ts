import { Injectable } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';

@Injectable()
export class ToastService {

  constructor() {

  }

  onSuccess(message: string): void {
    alert('Success Toast' + message);
  }

  onError(message: string): void {
    alert('Error Toast' + message);
  }

}
