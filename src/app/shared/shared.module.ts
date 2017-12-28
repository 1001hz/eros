import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { WeddingResolve } from './resolvers/wedding.service';
import { GuestResolve } from './resolvers/guest.service';
import { SafePipe } from './pipes/safe.pipe';
import { AuthActions } from './actions/auth.actions';
import { UserActions } from './actions/user.actions';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SafePipe
  ],
  declarations: [SafePipe],
  providers: [
    WeddingResolve,
    GuestResolve,
    AuthActions,
    UserActions
  ]
})
export class SharedModule { }
