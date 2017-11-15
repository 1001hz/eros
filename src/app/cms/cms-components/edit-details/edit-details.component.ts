import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  @Input() wedding;
  @Output() onUpdateWedding = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'name': [this.wedding.name, Validators.required],
      'date': [this.wedding.date, Validators.required]
    });
  }

  onUpdate(value) {
    value._id = this.wedding._id;
    this.onUpdateWedding.emit(value);
  }

}
