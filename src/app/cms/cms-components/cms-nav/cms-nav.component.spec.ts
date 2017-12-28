import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsNavComponent } from './cms-nav.component';

describe('CmsNavComponent', () => {
  let component: CmsNavComponent;
  let fixture: ComponentFixture<CmsNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
