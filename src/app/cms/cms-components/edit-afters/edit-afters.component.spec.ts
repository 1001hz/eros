import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAftersComponent } from './edit-afters.component';

describe('EditAftersComponent', () => {
  let component: EditAftersComponent;
  let fixture: ComponentFixture<EditAftersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAftersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAftersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
