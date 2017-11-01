import { NgModule, Optional, SkipSelf  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';

import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { ToastService } from './services/toast.service';
import { AuthService } from './services/auth.service';
import { WeddingService } from './services/wedding.service';

import { ToastComponent } from './toast/toast.component';

import { LoginGuard } from './guards/login.guard';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavComponent
  ],
  declarations: [NavComponent, ToastComponent],
  providers: [
    ApiService,
    UserService,
    ToastService,
    LoginGuard,
    AuthService,
    WeddingService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
