import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { WeddingComponent } from './wedding.component';

const routes: Routes = [
  {
    path: '',
    component: WeddingComponent,
    children: [
      { path: ':weddingId', component: HomeComponent },
      { path: ':weddingId/rsvp/:invitationId', component: RsvpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeddingRoutingModule { }
