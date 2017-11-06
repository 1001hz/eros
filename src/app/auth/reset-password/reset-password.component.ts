import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;
  public sending: boolean;
  public resetToken: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe( (params)=> {
      this.resetToken = params["token"];
    })
  }

  ngOnInit() {
    this.sending = false;
    this.resetPasswordForm = this.fb.group({
      'password': ['', Validators.required],
      'confirm': ['', Validators.required]
    });
  }

  onResetPassword(value) {
    this.sending = true;

    this.authService.resetPassword(value.password, this.resetToken).subscribe( (successFlag)=> {
        this.router.navigate(['login']);
      },
      () => {},
      () => {
        this.sending = false;
      }
    )
  }

}
