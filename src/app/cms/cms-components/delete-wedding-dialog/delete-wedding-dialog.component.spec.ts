import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteWeddingDialogComponent } from './delete-wedding-dialog.component';

describe('DeleteWeddingDialogComponent', () => {
  let component: DeleteWeddingDialogComponent;
  let fixture: ComponentFixture<DeleteWeddingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteWeddingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteWeddingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
