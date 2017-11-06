import { TestBed, inject } from '@angular/core/testing';
import { ToastService } from './toast.service';
import { ToastServiceStub } from './toast.service.stub';
import { LoaderService } from './loader.service';
import { LoaderServiceStub } from './loader.service.stub';
import { ApiService } from './api.service';
import { APP_CONFIG } from '../../app-config/app-config.module';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        { provide: LoaderService, useClass: LoaderServiceStub },
        { provide: ToastService, useClass: ToastServiceStub },
        { provide: APP_CONFIG, useValue: {} },
      ]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
