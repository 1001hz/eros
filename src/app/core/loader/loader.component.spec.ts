import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { LoaderServiceStub } from '../services/loader.service.stub';
import { Observable} from 'rxjs/Rx';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;
  let loaderServiceStub;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .overrideComponent(LoaderComponent, {
      set: {
        providers: [ { provide: LoaderService, useClass: LoaderServiceStub }]
      }})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    loaderServiceStub = fixture.debugElement.injector.get(LoaderService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
