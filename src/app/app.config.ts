import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import * as authEffects from './auth/store/effects'
import { authFeatureKey, authReducer } from './auth/store/reducers';
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';
import { productFeatureKey, productReducer } from './products page/store/reducers';
import * as ProductsEffect from './products page/store/effects';
import * as SingleProductsEffect from './single-product/store/effects';
import { singleProdFeatureKey, singleProdReducer } from './single-product/store/reducers';
import { authInterceptor } from './Shared/services/authInterceptor';
import { cartFeatureKey, cartReducer } from './Shared/components/cart/store/reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(),
    provideStore(),
    provideEffects(authEffects, ProductsEffect, SingleProductsEffect),
    provideState(authFeatureKey, authReducer),
    provideState(productFeatureKey, productReducer),
    provideState(singleProdFeatureKey, singleProdReducer),
    provideState(cartFeatureKey, cartReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    MessageService,
    provideAnimations(),
  ]
};


