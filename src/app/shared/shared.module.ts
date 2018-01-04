import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { WeddingResolve } from './resolvers/wedding.service';
import { GuestResolve } from './resolvers/guest.service';
import { SafePipe } from './pipes/safe.pipe';
import { AuthActions } from './actions/auth.actions';
import { UserActions } from './actions/user.actions';
import { NavComponent } from './nav/nav.component';
import { ClassScrollDirective } from './directives/class-scroll.directive';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    SafePipe,
    NavComponent,
    ClassScrollDirective
  ],
  declarations: [
    SafePipe,
    NavComponent,
    ClassScrollDirective
  ],
  providers: [
    WeddingResolve,
    GuestResolve,
    AuthActions,
    UserActions
  ]
})
export class SharedModule { }
