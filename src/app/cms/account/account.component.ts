import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/user.service';
import { IUpdateUserRequest } from '../../shared/interfaces/update-user-request.interface';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public user;
  public accountState;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
    this.accountState = this.userService.accountState;
  }

  onUpdateUser(formData: any) {
    let updateUserRequest: IUpdateUserRequest = {
      user: formData
    };
    this.userService.updateUser(updateUserRequest);
  }

}
