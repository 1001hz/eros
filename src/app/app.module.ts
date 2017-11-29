import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';
import { SharedModule} from './shared/shared.module'; // components, pipes, etc used in many templates, Material2 module
import { CoreModule} from './core/core.module'; // singletons, spinners, modals, man nav, anything that goes in the app template
import { AppRoutingModule } from './app-routing.module';
import { AppConfigModule } from './app-config/app-config.module';

import { StoreModule } from "@ngrx/store";
import { userReducer } from './shared/reducers/user.reducer';
import { weddingReducer } from './shared/reducers/wedding.reducer';
import { guestReducer } from './shared/reducers/guest.reducer';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

let rootReducer = {
  user: userReducer,
  weddings: weddingReducer,
  guests: guestReducer
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
    //HttpClientModule,
    SharedModule,
    CoreModule,
    AppConfigModule,
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  providers: [], // try to limit to services from CoreModule
  bootstrap: [ AppComponent ]
})
export class AppModule { }
