import { TestBed, inject } from '@angular/core/testing';
import { ApiService } from './api.service';
import { ApiServiceStub } from './api.service.stub';
import { UserService } from './user.service';
import { UserServiceStub } from './user.service.stub';
import { APP_CONFIG } from '../../app-config/app-config.module';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: ApiService, useClass: ApiServiceStub },
        { provide: UserService, useClass: UserServiceStub },
        { provide: APP_CONFIG, useValue: {} }
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
