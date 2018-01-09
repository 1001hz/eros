import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-cms-nav',
  templateUrl: './cms-nav.component.html',
  styleUrls: ['./cms-nav.component.scss']
})
export class CmsNavComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }
}
