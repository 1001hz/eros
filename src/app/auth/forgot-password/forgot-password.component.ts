import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IAuthState } from '../../shared/state/auth.state';

interface AuthState {
  auth: IAuthState
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  public resetLinkForm: FormGroup;
  public authState$;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AuthState>
  ) {
  }

  ngOnInit() {
    this.authState$ = this.store.select('auth');
    this.resetLinkForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]]
    });
  }

  onRequestResetLink(value) {
    this.authService.resetPasswordLink(value.email);
  }

}
