import { TestBed, inject } from '@angular/core/testing';
import { StoreModule, Store } from '@ngrx/store';
import { weddingReducer } from '../../shared/reducers/wedding.reducer';
import { ApiService } from './api.service';
import { ApiServiceStub } from './api.service.stub';

import { WeddingService } from './wedding.service';

describe('WeddingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeddingService,
        { provide: ApiService, useClass: ApiServiceStub }
      ],
      imports: [
        StoreModule.forRoot(weddingReducer),
      ],
    });
  });

  it('should be created', inject([WeddingService], (service: WeddingService) => {
    expect(service).toBeTruthy();
  }));
});
