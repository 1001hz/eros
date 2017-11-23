import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { WeddingResolve } from './resolvers/wedding.service';
import { GuestResolve } from './resolvers/guest.service';
import { SafePipe } from './pipes/safe.pipe';

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
    GuestResolve
  ]
})
export class SharedModule { }
