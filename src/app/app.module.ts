import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule} from './shared/shared.module'; // components, pipes, etc used in many templates, Material2 module
import { CoreModule} from './core/core.module'; // singletons, spinners, modals, man nav, anything that goes in the app template
import { AppRoutingModule } from './app-routing.module';
import { AppConfigModule } from './app-config/app-config.module';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from "@ngrx/store";
import { userReducer } from './shared/reducers/user.reducer';
import { weddingReducer } from './shared/reducers/wedding.reducer';
import { guestReducer } from './shared/reducers/guest.reducer';
import { authReducer } from './shared/reducers/auth.reducer';
import { accountReducer } from './shared/reducers/account.reducer';

import { AuthEffects } from './shared/effects/auth-effects.service';
import { UserEffects } from './shared/effects/user-effects.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

let rootReducer = {
  user: userReducer,
  weddings: weddingReducer,
  guests: guestReducer,
  auth: authReducer,
  account: accountReducer
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule,
    CoreModule,
    AppConfigModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([AuthEffects, UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [], // try to limit to services from CoreModule
  bootstrap: [ AppComponent ]
})
export class AppModule { }
