import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { PersistenceService } from './persistence.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
    const peristenceService = inject(PersistenceService);
    const token = peristenceService.get('accessToken');
    request = request.clone({
        setHeaders: {
            Authorization: token ? `${token}` : '',
        },
    });
    return next(request);
};
