import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NavComponent } from './nav/nav.component';

import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { ToastService } from './services/toast.service';
import { AuthService } from './services/auth.service';
import { WeddingService } from './services/wedding.service';
import { LoaderService } from './services/loader.service';

import { ToastComponent } from './toast/toast.component';

import { LoginGuard } from './guards/login.guard';
import { ResetPasswordGuard } from './guards/reset-password.guard';

import { throwIfAlreadyLoaded } from './guards/module-import.guard';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpModule
  ],
  exports: [
    NavComponent,
    LoaderComponent,
    ToastComponent
  ],
  declarations: [NavComponent, ToastComponent, LoaderComponent],
  providers: [
    ApiService,
    UserService,
    ToastService,
    LoginGuard,
    ResetPasswordGuard,
    AuthService,
    WeddingService,
    LoaderService,
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [ AuthService ]
    }
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
export function onAppInit(authService: AuthService): () => Promise<any> {
  return () => authService.tokenLogin();
}
