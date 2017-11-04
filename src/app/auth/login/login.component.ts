import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loading: boolean;
  private loginForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loading = false;
  }

  onLogin(value: any) {
    this.loading = true;
    this.authService.login(value.email, value.password).subscribe(
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
