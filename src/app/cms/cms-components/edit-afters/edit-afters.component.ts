import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-afters',
  templateUrl: './edit-afters.component.html',
  styleUrls: ['./edit-afters.component.scss']
})
export class EditAftersComponent implements OnInit {

  @Input() wedding;
  @Output() onUpdateWedding = new EventEmitter<any>();
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      'aftersVenue': [this.wedding.aftersVenue],
      'aftersLocation': [this.wedding.aftersLocation],
      'aftersInfo': [this.wedding.aftersInfo],
      'aftersTime': [this.wedding.aftersTime],
      'aftersMap': [this.wedding.aftersMap]
    });
  }

  onUpdate(value) {
    value._id = this.wedding._id;
    this.onUpdateWedding.emit(value);
  }

}
