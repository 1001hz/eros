import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWeddingComponent } from './add-wedding.component';

describe('AddWeddingComponent', () => {
  let component: AddWeddingComponent;
  let fixture: ComponentFixture<AddWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
