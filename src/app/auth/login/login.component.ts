import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginRequest } from '../../shared/interfaces/login-request.interface';
import { Store } from '@ngrx/store';
import { IAuthState } from '../../shared/state/auth.state';

interface AuthState {
  auth: IAuthState
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading: boolean;
  public loginForm: FormGroup;
  public authState$;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AuthState>
  ) {
    this.authState$ = this.store.select('auth');
  }

  ngOnInit() {
    this.loading = false;
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  onLogin(value: any) {
    let loginRequest: ILoginRequest = {
      email: value.email,
      password: value.password
    };
    this.authService.login(loginRequest);
  }

}
