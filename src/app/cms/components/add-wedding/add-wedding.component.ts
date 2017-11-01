import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-wedding',
  templateUrl: './add-wedding.component.html',
  styleUrls: ['./add-wedding.component.scss']
})
export class AddWeddingComponent implements OnInit {

  @Output() onAdd = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addNewWedding() {
    this.onAdd.emit({});
  }


}
