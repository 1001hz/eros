import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public requestSent: boolean;
  public sending: boolean;
  public resetLinkForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.requestSent = false;
    this.sending = false;
    this.resetLinkForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]]
    });
  }

  onRequestResetLink(value) {
    this.sending = true;

    this.authService.resetPasswordLink(value.email).subscribe( (successFlag:boolean)=> {
      this.requestSent = successFlag;
    },
      () => {},
      () => {
        this.sending = false;
      }
    )
  }

}
