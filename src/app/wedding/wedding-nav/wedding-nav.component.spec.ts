import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingNavComponent } from './wedding-nav.component';

describe('WeddingNavComponent', () => {
  let component: WeddingNavComponent;
  let fixture: ComponentFixture<WeddingNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
