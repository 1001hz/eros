import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { RsvpDialogComponent } from '../rsvp-dialog/rsvp-dialog.component';
import { Router } from '@angular/router';
import { Wedding } from '../../shared/models/wedding.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rsvpCode: string;
  public weddingId: string;
  public wedding: Wedding;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.wedding = this.route.snapshot.data['wedding'];
    console.log(this.wedding);
  }

  onGoToRsvp() {
    let dialogRef = this.dialog.open(RsvpDialogComponent, {

      data: { weddingId: this.wedding._id ,rsvpCode: this.rsvpCode }
    });

    dialogRef.afterClosed().subscribe(rsvpCode => {
      if(rsvpCode) {
        this.router.navigate(['rsvp', rsvpCode], {relativeTo: this.route});
      }
    });
  }

}
