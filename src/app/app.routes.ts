import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./global/global.routes').then(m => m.globalRoute)
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.routes').then(m => m.authRoutes)
    },
    {
        path: 'register',
        loadChildren: () => import('./auth/auth.routes').then(m => m.registerRoutes)
    },
    {
        path: 'products/:categoryId',
        loadChildren: () => import('./products page/products.routes').then(m => m.ProductsRoutes)
    },
    {
        path: 'product/:categoryName/:productId',
        loadChildren: () => import('./single-product/single-prod.routes').then(m => m.SingleProdRoute)
    }

];


