import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cms-nav',
  templateUrl: './cms-nav.component.html',
  styleUrls: ['./cms-nav.component.scss']
})
export class CmsNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLogout() {
    //TODO: implement logout
  }
}
