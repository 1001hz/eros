import { NgModule, InjectionToken  } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiRoutes } from './api-routes.config';

export let APP_CONFIG = new InjectionToken<any>('app.config');

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: {
      apiEndpoint: environment.apiEndpoint,
      apiRoutes: ApiRoutes,
      tokenKey: 'user_token'
    }
  }]
})
export class AppConfigModule { }
