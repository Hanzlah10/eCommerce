import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { authActions } from "./actions";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { PersistenceService } from "../../Shared/services/persistence.service";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { MessageService } from "primeng/api";
import { CurrentUserInterface } from "../../Shared/types/currentUser.interface";

export const registerEffects = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
    ) => {
        return actions$.pipe(
            ofType(authActions.register),
            switchMap(({ request }) =>
                authService.registerUser(request).pipe(
                    map(() => {
                        return authActions.registerSuccess()
                    }),
                    catchError((errorResponse: HttpErrorResponse) =>
                        of(
                            authActions.registerFailure({
                                errors: errorResponse.error,
                            })
                        )
                    )
                )
            )
        );
    },
    { functional: true }
);

export const loginEffect = createEffect(
    (
        authService = inject(AuthService),
        actions$ = inject(Actions),
        persistenceService = inject(PersistenceService),
    ) => {
        return actions$.pipe(
            ofType(authActions.login),
            switchMap(({ request }) => {
                return authService.loginUser(request).pipe(
                    map((authResponse: AuthResponseInterface) => {
                        console.log(authResponse);

                        persistenceService.set('accessToken', authResponse.accessToken);
                        persistenceService.set('refreshToken', authResponse.refreshToken);
                        return authActions.loginSuccess({ currentUser: authResponse.user })
                    }),
                    catchError((errorResponse: HttpErrorResponse) =>
                        of(
                            authActions.loginFailure({
                                errors: errorResponse.error,
                            })
                        )
                    )

                )
            })
        )
    },
    {
        functional: true
    }
)

export const redirectAfterLoginEffect = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
        return actions$.pipe(
            ofType(authActions.loginSuccess),
            tap(() => {
                router.navigateByUrl('/');
            })
        );
    },
    { functional: true, dispatch: false }
);


export const redirectAfterRegisterEffect = createEffect(
    (actions$ = inject(Actions), router = inject(Router), messageService = inject(MessageService)) => {
        return actions$.pipe(
            ofType(authActions.registerSuccess),
            tap(() => {
                messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content', life: 10000 });
                router.navigateByUrl('/login');
            })
        );
    },
    { functional: true, dispatch: false }
);

export const getCurrentUserEffect = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
        persistanceService = inject(PersistenceService)
    ) => {
        return actions$.pipe(
            ofType(authActions.getCurrentUser),
            switchMap(() => {
                const token = persistanceService.get('accessToken')
                if (!token) {
                    return of(authActions.getCurrentUserFailure())
                }

                return authService.getCurrentUser(token).pipe(
                    map((currentUser: CurrentUserInterface) => {
                        return authActions.getCurrentUserSuccess(currentUser);
                    }),
                    catchError(() => {
                        return of(
                            authActions.getCurrentUserFailure()
                        );
                    })
                );
            })
        );
    },
    { functional: true }
);



// export const loginEffects1 = createEffect(
//     (
//         actions$ = inject(Actions),
//         authService = inject(AuthService),
//         persistenceService = inject(PersistenceService),
//         router = inject(Router)
//     ) => {
//         return actions$.pipe(
//             ofType(authActions.login),
//             switchMap(({ request }) => {
//                 return authService.loginUser(request).pipe(
//                     map((authResponse: AuthResponseInterface) => {
//                         persistenceService.set('refreshToken', authResponse.refreshToken);
//                         persistenceService.set('accessToken', authResponse.accessToken);
//                         // router.navigate(['/register'])
//                         return authActions.loginSuccess({ currentUser: authResponse.user });
//                     }),
//                     catchError((errorResponse: HttpErrorResponse) => {
//                         return of(
//                             authActions.loginFailure({
//                                 errors: errorResponse.error,
//                             })
//                         );
//                     })
//                 );
//             })
//         );
//     },
//     { functional: true }
// )