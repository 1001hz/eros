import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { WeddingRoutingModule } from './wedding-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RsvpDialogComponent } from './rsvp-dialog/rsvp-dialog.component';
import { WeddingComponent } from './wedding.component';
import { WeddingNavComponent } from './wedding-nav/wedding-nav.component';

@NgModule({
  imports: [
    CommonModule,
    WeddingRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    RsvpDialogComponent,
  ],
  declarations: [HomeComponent, RsvpComponent, RsvpDialogComponent, WeddingComponent, WeddingNavComponent]
})
export class WeddingModule { }
