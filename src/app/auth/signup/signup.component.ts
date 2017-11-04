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

  private loading: boolean;
  private signUpForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signUpForm = fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required],
      'confirm': ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loading = false;
  }

  onSignUp(value: any) {
    this.loading = true;
    this.authService.signup(value.email, value.password).subscribe(
      () => {
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
