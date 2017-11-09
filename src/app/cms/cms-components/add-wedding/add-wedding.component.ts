import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-wedding',
  templateUrl: './add-wedding.component.html',
  styleUrls: ['./add-wedding.component.scss']
})
export class AddWeddingComponent implements OnInit {

  @Output() onAdd = new EventEmitter<any>();
  public loading: boolean;
  public newWeddingForm: FormGroup;
  public formOpened: boolean;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loading = false;
    this.formOpened = false;
    this.newWeddingForm = this.fb.group({
      'name': ['', [Validators.required]],
      'date': ['', Validators.required]
    });
  }

  addNewWedding(value) {
    this.onAdd.emit({name: value.name, date: value.date});
    this.formOpened = false;
    this.newWeddingForm.reset();
  }

  onOpenForm(): void {
    this.formOpened = !this.formOpened;
  }

}
