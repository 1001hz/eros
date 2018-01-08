import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wedding-nav',
  templateUrl: './wedding-nav.component.html',
  styleUrls: ['./wedding-nav.component.scss']
})
export class WeddingNavComponent implements OnInit {

  @Input() version: string;

  constructor() { }

  ngOnInit() {
  }

}
