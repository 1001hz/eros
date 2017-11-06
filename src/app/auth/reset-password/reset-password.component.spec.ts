import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { AuthServiceStub } from '../../core/services/auth.service.stub';

import { ResetPasswordComponent } from './reset-password.component';

export class ActivatedRouteStub {

  // ActivatedRoute.params is Observable
  private subject = new BehaviorSubject({token: '123'});
  public params = this.subject.asObservable();
}

export class RouterStub {
  public navigate(){
  }
}

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;
  let authServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [ ResetPasswordComponent ]
    })
    .overrideComponent(ResetPasswordComponent, {
      set: {
        providers: [
          {provide: AuthService, useClass: AuthServiceStub },
          {provide: ActivatedRoute, useClass: ActivatedRouteStub},
          {provide: Router, useClass: RouterStub}
        ]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    authServiceStub = fixture.debugElement.injector.get(AuthService);

    fixture.detectChanges();

    const spy = spyOn(authServiceStub, 'resetPassword').and.callThrough();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize sending flag', () => {
    expect(component.sending).toEqual(false);
  });

  it('should get token from query params', () => {
    expect(component.resetToken).toBeTruthy();
    expect(component.resetToken).toEqual('123');
  });

  it('should have invalid form when fields are empty', () => {
    expect(component.resetPasswordForm.valid).toBeFalsy();
  });

  it('password field should have required check', () => {
    let password = component.resetPasswordForm.controls['password'];
    let errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('confirm field should have required check', () => {
    let confirm = component.resetPasswordForm.controls['confirm'];
    let errors = confirm.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should call resetPassword fn from AuthService', fakeAsync(() => {
    component.onResetPassword({password: "password"});
    expect(authServiceStub.resetPassword).toHaveBeenCalled();
  }));

});
