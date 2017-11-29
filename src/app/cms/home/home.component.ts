import { Component, OnInit } from '@angular/core';
import { WeddingService } from '../../core/services/wedding.service';
import { ActivatedRoute } from '@angular/router';
import { INewWeddingRequest } from '../../shared/interfaces/new-wedding-request.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  weddings;

  constructor(
    private route: ActivatedRoute,
    private weddingService: WeddingService) {}

  ngOnInit() {
    this.weddings = this.weddingService.weddings;
  }

  onAdd(formData) {
    let weddingRequestData: INewWeddingRequest = {
      name: formData.name,
      date: formData.date
    };
    this.weddingService.addNewWedding(weddingRequestData).subscribe();
  }
}
