import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-delete-wedding-dialog',
  templateUrl: './delete-wedding-dialog.component.html',
  styleUrls: ['./delete-wedding-dialog.component.scss']
})
export class DeleteWeddingDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteWeddingDialogComponent>
  )
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
