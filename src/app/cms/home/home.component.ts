import { Component, OnInit } from '@angular/core';
import { WeddingService } from '../../core/services/wedding.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weddings;

  constructor(private weddingService: WeddingService) { }

  ngOnInit() {
    this.weddings = this.weddingService.getAllWeddings();
  }

  onAdd(wedding) {
    this.weddingService.addNewWedding(wedding);
  }
}
