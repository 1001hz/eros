import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WeddingService } from '../../core/services/wedding.service';
import { Observable } from 'rxjs/Rx';
import { WeddingServiceStub } from '../../core/services/wedding.service.stub';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let weddingServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ HomeComponent ]
    })
    .overrideComponent(HomeComponent, {
      set: {
        providers: [ { provide: WeddingService, useClass: WeddingServiceStub }]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    weddingServiceStub = fixture.debugElement.injector.get(WeddingService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
