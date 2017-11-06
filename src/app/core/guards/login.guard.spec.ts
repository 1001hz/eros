import { TestBed, async, inject } from '@angular/core/testing';
import { UserService } from '../services/user.service';
import { UserServiceStub } from '../services/user.service.stub';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginGuard,
        { provide: UserService, useClass: UserServiceStub }
      ]
    });
  });

  it('should ...', inject([LoginGuard], (guard: LoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
