import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CmsRoutingModule } from './cms-routing.module';
import { CmsComponentsModule } from './cms-components/cms-components.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { GuestlistComponent } from './guestlist/guestlist.component';
import { AccountComponent } from './account/account.component';
import { CmsComponent } from './cms.component';

@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule,
    CmsComponentsModule
  ],
  declarations: [CmsComponent, HomeComponent, DetailsComponent, GuestlistComponent, AccountComponent]
})
export class CmsModule { }
