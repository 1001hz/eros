import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

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
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.loading = false;
    this.signUpForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'confirm': ['', Validators.required],
    });
  }

  onSignUp(value: any) {
    this.loading = true;
    this.authService.signup(value.email, value.password).subscribe(
      (successFlag) => {
        this.router.navigate(['cms']);
      },
      () => {

      },
      () => {
        this.loading = false;
      }
    );
  }

}
