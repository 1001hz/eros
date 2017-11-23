import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-ceremony',
  templateUrl: './edit-ceremony.component.html',
  styleUrls: ['./edit-ceremony.component.scss']
})
export class EditCeremonyComponent implements OnInit {

  @Input() wedding;
  @Output() onUpdateWedding = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'ceremonyVenue': [this.wedding.ceremonyVenue],
      'ceremonyLocation': [this.wedding.ceremonyLocation],
      'ceremonyInfo': [this.wedding.ceremonyInfo],
      'ceremonyTime': [this.wedding.ceremonyTime],
      'ceremonyMap': [this.wedding.ceremonyMap]
    });
  }

  onUpdate(value) {
    value._id = this.wedding._id;
    this.onUpdateWedding.emit(value);
  }

}
