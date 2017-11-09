import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeddingService } from '../../core/services/wedding.service';
import { Wedding } from '../../shared/models/wedding.model';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public wedding$: Observable<Wedding>;

  constructor(
    private route: ActivatedRoute,
    private weddingService: WeddingService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.wedding$ = this.weddingService.getWeddingById(params['weddingId']);
    });
  }

}
