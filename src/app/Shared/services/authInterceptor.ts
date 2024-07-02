import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { PersistenceService } from './persistence.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const peristenceService = inject(PersistenceService);
    const token = peristenceService.get('accessToken');
    let request1 = request.clone({

        setHeaders: { Authorization: `Bearer ${token}` },

    });
    console.log(token);

    return next(request1);
};


