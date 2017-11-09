import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { WeddingResolve } from './shared/resolvers/wedding.service';
import { LoginGuard } from './core/guards/login.guard';

let appRoutes = [
  { path: '', component: LandingComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'wedding', loadChildren: './wedding/wedding.module#WeddingModule'},
  { path: 'cms', loadChildren: './cms/cms.module#CmsModule', canActivate: [LoginGuard], resolve: {
    weddings: WeddingResolve
  }}
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
