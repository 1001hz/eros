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

  public loading: boolean;
  public loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loading = false;
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', Validators.required]
    });
  }

  onLogin(value: any) {
    this.loading = true;
    this.authService.login(value.email, value.password).subscribe(
      (successFlag: boolean) => {
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
