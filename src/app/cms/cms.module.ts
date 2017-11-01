import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CmsRoutingModule } from './cms-routing.module';
import { HomeComponent } from './home/home.component';
import { WeddingListComponent } from './components/wedding-list/wedding-list.component';
import { AddWeddingComponent } from './components/add-wedding/add-wedding.component';

@NgModule({
  imports: [
    CommonModule,
    CmsRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, WeddingListComponent, AddWeddingComponent]
})
export class CmsModule { }
