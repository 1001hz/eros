import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingListComponent } from './wedding-list.component';

describe('WeddingListComponent', () => {
  let component: WeddingListComponent;
  let fixture: ComponentFixture<WeddingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
