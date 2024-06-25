import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as authEffects from './auth/store/effects'
import { authFeatureKey, authReducer } from './auth/store/reducers';
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideEffects(authEffects),
    provideState(authFeatureKey, authReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    MessageService,
    provideAnimations()
  ]
};
