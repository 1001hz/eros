import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { WeddingResolve } from './resolvers/wedding.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ],
  declarations: [],
  providers: [
    WeddingResolve
  ]
})
export class SharedModule { }
