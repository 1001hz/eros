import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { GuestlistComponent } from './guestlist/guestlist.component';
import { AccountComponent } from './account/account.component';
import { GuestResolve } from '../shared/resolvers/guest.service';
import { CmsComponent } from './cms.component';

const routes: Routes = [
  {
    path: '',
    component: CmsComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'account', component: AccountComponent },
      { path: ':weddingId/details', component: DetailsComponent },
      { path: ':weddingId/guestlist', component: GuestlistComponent, resolve: {
        guests: GuestResolve
      } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
