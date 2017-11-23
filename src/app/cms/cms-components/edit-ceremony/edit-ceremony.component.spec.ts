import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCeremonyComponent } from './edit-ceremony.component';

describe('EditCeremonyComponent', () => {
  let component: EditCeremonyComponent;
  let fixture: ComponentFixture<EditCeremonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCeremonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCeremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
