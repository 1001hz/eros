import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddWeddingComponent } from './add-wedding/add-wedding.component';
import { WeddingListComponent } from './wedding-list/wedding-list.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { DeleteWeddingDialogComponent } from './delete-wedding-dialog/delete-wedding-dialog.component';
import { EditCeremonyComponent } from './edit-ceremony/edit-ceremony.component';
import { EditAftersComponent } from './edit-afters/edit-afters.component';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { CmsNavComponent } from './cms-nav/cms-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  entryComponents: [
    DeleteWeddingDialogComponent,
  ],
  exports:[
    AddWeddingComponent,
    WeddingListComponent,
    EditDetailsComponent,
    EditCeremonyComponent,
    EditAftersComponent,
    EditAccountComponent,
    CmsNavComponent
  ],
  declarations: [
    AddWeddingComponent,
    WeddingListComponent,
    EditDetailsComponent,
    DeleteWeddingDialogComponent,
    EditCeremonyComponent,
    EditAftersComponent,
    EditAccountComponent,
    CmsNavComponent
  ]
})
export class CmsComponentsModule { }
