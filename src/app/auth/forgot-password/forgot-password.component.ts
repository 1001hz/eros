import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  private requestSent: boolean;
  private sending: boolean;
  private resetLinkForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private authService: AuthService
  ) {
    this.resetLinkForm = fb.group({
      'email': ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {
    this.requestSent = false;
    this.sending = false;
  }

  onRequestResetLink(value) {
    this.sending = true;

    this.authService.resetPasswordLink(value.email).subscribe( ()=> {
      this.requestSent = true;
    },
      () => {},
      () => {
        this.sending = false;
      }
    )
  }

}
