import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { authActions } from "./actions";
import { catchError, map, of, switchMap, take, tap } from "rxjs";
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
    (actions$ = inject(Actions),
        router = inject(Router),
        messageService = inject(MessageService)
    ) => {
        return actions$.pipe(
            ofType(authActions.loginSuccess),
            tap(() => {
                messageService.add({ severity: 'success', summary: 'Logged In', detail: 'logged in successfully' });
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
                messageService.add({ severity: 'success', summary: 'Success', detail: 'Registration Successfull', life: 10000 });
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
        persistenceService = inject(PersistenceService),
    ) => {
        return actions$.pipe(
            ofType(authActions.getCurrentUser),
            switchMap(() => {
                let token = persistenceService.get('accessToken')
                if (!token) {
                    return of(authActions.getCurrentUserFailure())
                }

                return authService.getCurrentUser(token as string).pipe(
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


export const logoutEffect = createEffect(
    (
        persistenceService = inject(PersistenceService),
        actions$ = inject(Actions),
        messageService = inject(MessageService)
    ) => {

        return actions$.pipe(
            ofType(authActions.logout),
            take(1),
            tap(() => {
                persistenceService.set('accessToken', " ")
                persistenceService.set('refreshToken', " ")
                // primeng toast
                messageService.add({ severity: 'warn', summary: 'Logged out', detail: 'logged out successfully' });
            })
        )
    }, {
    functional: true
}
)

