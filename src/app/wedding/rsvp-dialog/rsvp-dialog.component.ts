import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeddingService } from '../../core/services/wedding.service';

@Component({
  selector: 'app-rsvp-dialog',
  templateUrl: './rsvp-dialog.component.html',
  styleUrls: ['./rsvp-dialog.component.scss']
})
export class RsvpDialogComponent implements OnInit {

  public data;

  constructor(
    public weddingService: WeddingService,
    public dialogRef: MatDialogRef<RsvpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
      this.data = data;
  }

  ngOnInit() {

  }

  onCheckCode(): void {
    this.weddingService.checkInvitation(this.data.weddingId, this.data.rsvpCode).subscribe( valid => {
      if(valid) {
        this.dialogRef.close(this.data.rsvpCode);
      }
      else{
        this.dialogRef.close(null);
      }
    })

  }

}
