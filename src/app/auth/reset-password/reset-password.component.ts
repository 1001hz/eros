import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private resetPasswordForm: FormGroup;
  private sending: boolean;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.resetPasswordForm = fb.group({
      'password': ['', Validators.required],
      'confirm': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.sending = false;
  }

  onResetPassword(value) {
    this.sending = true;

    this.authService.resetPassword(value.password, value.confirm).subscribe( ()=> {
        this.router.navigate(['login']);
      },
      () => {},
      () => {
        this.sending = false;
      }
    )
  }

}
