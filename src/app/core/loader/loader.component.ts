import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public loading$: Observable<boolean>;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loading$ = this.loaderService.loading;
  }

}
