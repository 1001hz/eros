import { TestBed, inject } from '@angular/core/testing';

import { AuthEffectsService } from './auth-effects.service';

describe('AuthEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthEffectsService]
    });
  });

  it('should be created', inject([AuthEffectsService], (service: AuthEffectsService) => {
    expect(service).toBeTruthy();
  }));
});
