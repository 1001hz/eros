import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs/Rx';
import { AuthServiceStub } from '../../core/services/auth.service.stub';

import { SignupComponent } from './signup.component';

export class RouterStub {
  public navigate(){
  }
}

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let authServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [ SignupComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideComponent(SignupComponent, {
      set: {
        providers: [
          { provide: AuthService, useClass: AuthServiceStub },
          { provide: Router, useClass: RouterStub }
        ]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    authServiceStub = fixture.debugElement.injector.get(AuthService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loading flag', () => {
    expect(component.loading).toEqual(false);
  });

  it('should have invalid form when fields are empty', () => {
    expect(component.signUpForm.valid).toBeFalsy();
  });

  it('email field should have required check', () => {
    let email = component.signUpForm.controls['email'];
    let errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field should have email pattern check', () => {
    let email = component.signUpForm.controls['email'];
    let errors = email.errors || {};
    expect(errors['email']).toBeTruthy();

    email.setValue("test");
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();

    email.setValue("test@test.com");
    errors = email.errors || {};
    expect(errors['email']).not.toBeTruthy();
  });

  it('password field should have required check', () => {
    let password = component.signUpForm.controls['password'];
    let errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should call signup fn from AuthService', fakeAsync(() => {
    const spy = spyOn(authServiceStub, 'signup').and.callThrough();
    component.onSignUp({email: "test@test.com", password: "password"});
    expect(authServiceStub.signup).toHaveBeenCalled();
  }));

});
