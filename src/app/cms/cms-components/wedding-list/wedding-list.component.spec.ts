import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeddingService } from '../../../core/services/wedding.service';
import { Observable } from 'rxjs/Rx';
import { WeddingServiceStub } from '../../../core/services/wedding.service.stub';

import { WeddingListComponent } from './wedding-list.component';

describe('WeddingListComponent', () => {
  let component: WeddingListComponent;
  let fixture: ComponentFixture<WeddingListComponent>;
  let weddingServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ WeddingListComponent ]
    })
    .overrideComponent(WeddingListComponent, {
      set: {
        providers: [ { provide: WeddingService, useClass: WeddingServiceStub }]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingListComponent);
    component = fixture.componentInstance;
    weddingServiceStub = fixture.debugElement.injector.get(WeddingService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
