import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  @Input() user;
  @Input() accountState;
  @Output() onUpdateUser = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'fname': [this.user.fname],
      'lname': [this.user.lname]
    });
  }

  onUpdate(value: any) {
    this.onUpdateUser.emit(value);
  }

}
