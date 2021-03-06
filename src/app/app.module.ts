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
import { toastReducer } from './shared/reducers/toast.reducer';

import { AuthEffects } from './shared/effects/auth-effects.service';
import { UserEffects } from './shared/effects/user-effects.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { FeatureListComponent } from './landing/landing-components';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/reduce';


let rootReducer = {
  user: userReducer,
  weddings: weddingReducer,
  guests: guestReducer,
  auth: authReducer,
  account: accountReducer,
  toasts: toastReducer
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    FeatureListComponent
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
