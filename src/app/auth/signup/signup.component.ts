import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ISignUpRequest } from '../../shared/interfaces/signup-request.interface';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public loading: boolean;
  public signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.signUpForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'confirm': ['', Validators.required],
    });
  }

  onSignUp(value: any) {
    let signupRequest: ISignUpRequest = {
      email: value.email,
      password: value.password
    };
    this.authService.signup(signupRequest);
  }

}
