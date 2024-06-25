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

];
