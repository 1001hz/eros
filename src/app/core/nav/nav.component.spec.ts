import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from './nav.component';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { UserServiceStub } from '../services/user.service.stub';
import { AuthServiceStub } from '../services/auth.service.stub';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, RouterTestingModule],
      declarations: [ NavComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideComponent(NavComponent, {
      set: {
        providers: [
          { provide: UserService, useClass: UserServiceStub },
          { provide: AuthService, useClass: AuthServiceStub }
        ]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
