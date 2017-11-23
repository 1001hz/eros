import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeddingService } from '../../core/services/wedding.service';
import { ToastService } from '../../core/services/toast.service';
import { Guest } from '../../shared/models/guest.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-guestlist',
  templateUrl: './guestlist.component.html',
  styleUrls: ['./guestlist.component.scss']
})
export class GuestlistComponent implements OnInit {

  public guests$: Observable<Array<Guest>>;
  public weddingId: string;

  constructor(
    private route: ActivatedRoute,
    private weddingService: WeddingService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.weddingId = params['weddingId'];
      this.guests$ = this.weddingService.guests;
    });
  }

}
