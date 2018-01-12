import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { WeddingResolve } from './resolvers/wedding.service';
import { GuestResolve } from './resolvers/guest.service';
import { SafePipe } from './pipes/safe.pipe';
import { AuthActions } from './actions/auth.actions';
import { UserActions } from './actions/user.actions';
import { ToastActions } from './actions/toast.actions';
import { NavComponent } from './nav/nav.component';
import { ClassScrollDirective } from './directives/class-scroll.directive';
import { ScrollToViewDirective } from './directives/scroll-to-view.directive';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    SafePipe,
    NavComponent,
    ClassScrollDirective,
    ScrollToViewDirective,
    FooterComponent
  ],
  declarations: [
    SafePipe,
    NavComponent,
    ClassScrollDirective,
    ScrollToViewDirective,
    FooterComponent
  ],
  providers: [
    WeddingResolve,
    GuestResolve,
    AuthActions,
    UserActions,
    ToastActions
  ]
})
export class SharedModule { }
