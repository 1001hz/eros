import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs/Rx';
import { AuthServiceStub } from '../../core/services/auth.service.stub';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule, RouterTestingModule.withRoutes([{path: 'cms', component: LoginComponent }])],
      declarations: [ LoginComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideComponent(LoginComponent, {
      set: {
        providers: [
          { provide: AuthService, useClass: AuthServiceStub }
        ]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authServiceStub = fixture.debugElement.injector.get(AuthService);
    const spy = spyOn(authServiceStub, 'login').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loading flag', () => {
    expect(component.loading).toEqual(false);
  });

  it('should have invalid form when fields are empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field should have required check', () => {
    let email = component.loginForm.controls['email'];
    let errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field should have email pattern check', () => {
    let email = component.loginForm.controls['email'];
    let errors = email.errors || {};
    expect(errors['email']).toBeTruthy();

    email.setValue("test");
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();

    email.setValue("test@test.com");
    errors = email.errors || {};
    expect(errors['email']).not.toBeTruthy();
  });

  it('should call login fn from AuthService', fakeAsync(() => {
    component.onLogin({email: "some@email.com", password: "password"});
    expect(authServiceStub.login).toHaveBeenCalled();
  }));


});
