import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RsvpDialogComponent } from '../rsvp-dialog/rsvp-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rsvpCode: string;
  public weddingId: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.weddingId = params['weddingId'];
    });
  }

  onGoToRsvp() {
    let dialogRef = this.dialog.open(RsvpDialogComponent, {

      data: { weddingId: this.weddingId ,rsvpCode: this.rsvpCode }
    });

    dialogRef.afterClosed().subscribe(rsvpCode => {
      if(rsvpCode) {
        this.router.navigate(['rsvp', rsvpCode], {relativeTo: this.route});
      }
    });
  }

}
