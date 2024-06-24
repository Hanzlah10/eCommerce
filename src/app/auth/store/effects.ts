import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { authActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { PersistenceService } from "../../Shared/services/persistence.service";
import { AuthResponseInterface } from "../types/authResponse.interface";
import { CurrentUserInterface } from "../../Shared/types/currentUser.interface";

export const registerEffects = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
        persistenceService = inject(PersistenceService),
        router = inject(Router)
    ) => {
        return actions$.pipe(
            ofType(authActions.register),
            switchMap(({ request }) =>
                authService.registerUser(request).pipe(
                    switchMap(() =>
                        authService.loginUser({ username: request.username, password: request.password }).pipe(
                            map((authResponse) => {
                                // Store tokens
                                console.log(authResponse.accessToken + " abc");

                                persistenceService.set('accessToken', authResponse.accessToken);
                                persistenceService.set('refreshToken', authResponse.refreshToken);

                                //navigate to dashboard
                                // router.navigate(['/dashboard']);

                                return authActions.loginSuccess({ currentUser: authResponse.user });
                            })
                        )
                    ),
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
        router = inject(Router)
    ) => {
        return actions$.pipe(
            ofType(authActions.login),
            switchMap(({ request }) => {
                return authService.loginUser(request).pipe(
                    map((authResponse: AuthResponseInterface) => {
                        console.log(authResponse);

                        persistenceService.set('accessToken', authResponse.accessToken);
                        persistenceService.set('refreshToken', authResponse.refreshToken);
                        console.log(authResponse.refreshToken);


                        router.navigate([''])
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


export const loginEffects1 = createEffect(
    (
        actions$ = inject(Actions),
        authService = inject(AuthService),
        persistenceService = inject(PersistenceService),
        router = inject(Router)
    ) => {
        return actions$.pipe(
            ofType(authActions.login),
            switchMap(({ request }) => {
                return authService.loginUser(request).pipe(
                    map((authResponse: AuthResponseInterface) => {
                        persistenceService.set('refreshToken', authResponse.refreshToken);
                        persistenceService.set('accessToken', authResponse.accessToken);
                        // router.navigate(['/register'])
                        return authActions.loginSuccess({ currentUser: authResponse.user });
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            authActions.loginFailure({
                                errors: errorResponse.error,
                            })
                        );
                    })
                );
            })
        );
    },
    { functional: true }
)