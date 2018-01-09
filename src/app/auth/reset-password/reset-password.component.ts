import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAuthState } from '../../shared/state/auth.state';

interface AuthState {
  auth: IAuthState
}

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public form: FormGroup;
  public resetToken: string;
  public authState$;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private store: Store<AuthState>
  ) {
    this.authState$ = this.store.select('auth');
    this.route.params.subscribe( (params)=> {
      this.resetToken = params["token"];
    })
  }

  ngOnInit() {
    this.form = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm': ['', Validators.required]
    });
  }

  onResetPassword(value) {
    this.authService.resetPassword(value.email, value.password, this.resetToken);
  }

}
