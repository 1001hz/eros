import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddWeddingComponent } from './add-wedding/add-wedding.component';
import { WeddingListComponent } from './wedding-list/wedding-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[AddWeddingComponent, WeddingListComponent],
  declarations: [AddWeddingComponent, WeddingListComponent]
})
export class CmsComponentsModule { }
