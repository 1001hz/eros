import { Component, OnInit, Input } from '@angular/core';
import { WeddingService } from '../../../core/services/wedding.service';
import { Wedding } from '../../../shared/models/wedding.model';

@Component({
  selector: 'app-wedding-list',
  templateUrl: './wedding-list.component.html',
  styleUrls: ['./wedding-list.component.scss']
})
export class WeddingListComponent implements OnInit {

  @Input() weddings;
  constructor() { }

  ngOnInit() {

  }

}
