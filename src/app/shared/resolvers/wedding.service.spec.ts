import { TestBed, inject } from '@angular/core/testing';

import { WeddingResolve } from './wedding.service';

describe('WeddingResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeddingResolve]
    });
  });

  it('should be created', inject([WeddingResolve], (service: WeddingResolve) => {
    expect(service).toBeTruthy();
  }));
});
