import { NgModule, Optional, SkipSelf, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


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

import { ApiInterceptor } from './interceptors/api.interceptor';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    LoaderComponent,
    ToastComponent
  ],
  declarations: [ToastComponent, LoaderComponent],
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
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
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
