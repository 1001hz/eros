import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeddingService } from '../../core/services/wedding.service';
import { ToastService } from '../../core/services/toast.service';
import { Wedding } from '../../shared/models/wedding.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DeleteWeddingDialogComponent } from '../cms-components/delete-wedding-dialog/delete-wedding-dialog.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public wedding$: Observable<Wedding>;
  public step = 0;
  public weddingId: string;
  public cancel: boolean;

  constructor(
    private route: ActivatedRoute,
    private weddingService: WeddingService,
    private toastService: ToastService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.route.params.subscribe( (params) => {
      this.weddingId = params['weddingId'];
      this.wedding$ = this.weddingService.getWeddingById(this.weddingId);
    });
  }

  onUpdateWedding(formData) {
    this.weddingService.update(formData).subscribe( (successFlag) => {
      if(successFlag){
        this.toastService.onSuccess("Wedding data has been updated");
        this.nextStep();
      }
    });
  }

  onRemoveWedding() {

    let dialogRef = this.dialog.open(DeleteWeddingDialogComponent, {
      width: '350px',
      data: { cancel: this.cancel }
    });

    dialogRef.afterClosed().subscribe(doCancel => {
      if(!doCancel){
        this.weddingService.remove(this.weddingId).subscribe( (successFlag) => {
          if(successFlag){
            this.router.navigate(['cms']);
          }
        });
      }
    });


  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  lastStep() {
    this.step--;
  }

}
