import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs/Observable';
import { AuthServiceStub } from '../../core/services/auth.service.stub';

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  let authServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ ForgotPasswordComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideComponent(ForgotPasswordComponent, {
      set: {
        providers: [ { provide: AuthService, useClass: AuthServiceStub }]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    authServiceStub = fixture.debugElement.injector.get(AuthService);
    component.ngOnInit();
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize requestSent and sending flags', () => {
    expect(component.requestSent).toEqual(false);
    expect(component.sending).toEqual(false);
  });

  it('should have invalid form when fields are empty', () => {
    expect(component.resetLinkForm.valid).toBeFalsy();
  });

  it('email field should have required check', () => {
    let email = component.resetLinkForm.controls['email'];
    let errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('email field should have email pattern check', () => {
    let email = component.resetLinkForm.controls['email'];
    let errors = email.errors || {};
    expect(errors['email']).toBeTruthy();

    email.setValue("test");
    errors = email.errors || {};
    expect(errors['email']).toBeTruthy();

    email.setValue("test@test.com");
    errors = email.errors || {};
    expect(errors['email']).not.toBeTruthy();
  });

  it('should resolve observable from AuthService', fakeAsync(() => {
    const spy = spyOn(authServiceStub, 'resetPasswordLink').and.returnValue(
      Observable.of(true)
    );
    component.onRequestResetLink({email: "some@email.com"});
    fixture.detectChanges();
    expect(spy.calls.any()).toEqual(true);
  }));

  it('should set requestSent flag to true after authService call', fakeAsync(() => {

    component.onRequestResetLink({email: "some@email.com"});
    fixture.detectChanges();
    expect(component.requestSent).toEqual(true);
  }));

  it('should set sending flag to false after authService call', fakeAsync(() => {
    component.onRequestResetLink({email: "some@email.com"});
    fixture.detectChanges();
    expect(component.sending).toEqual(false);
  }));


});
