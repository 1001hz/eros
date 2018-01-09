import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({opacity: '0'}))
      ])
    ])
  ]
})
export class ToastComponent implements OnInit {

  toasts$
  constructor(private toastService: ToastService) { }

  ngOnInit() {
    this.toasts$ = this.toastService.toasts;
  }

}
