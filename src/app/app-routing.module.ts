import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

import { LoginGuard } from './core/guards/login.guard';

let appRoutes = [
  { path: '', component: LandingComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'wedding', loadChildren: './wedding/wedding.module#WeddingModule'},
  { path: 'cms', loadChildren: './cms/cms.module#CmsModule', canActivate: [LoginGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes
      //{ enableTracing: true } // <-- debugging purposes only
    ),
  ],
  declarations: []
})
export class AppRoutingModule { }
