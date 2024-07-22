import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AddressService } from "../services/address.service";
import { inject } from "@angular/core";
import { checkoutActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";

export const AddAddressEffects = createEffect(
    (
        actions$ = inject(Actions),
        addressService = inject(AddressService)
    ) => {
        return actions$.pipe(
            ofType(checkoutActions.addAddress),
            switchMap((address) => {
                return addressService.addAddress(address).pipe(
                    map((response) => {
                        return checkoutActions.addAddressSuccess(response)
                    }),
                    catchError((e: HttpErrorResponse) => (
                        of(
                            checkoutActions.addAddressFailure(e.error)
                        )
                    ))
                )
            })
        )
    },
    {
        functional: true
    }
)

export const GetAddressEffects = createEffect(
    (
        actions$ = inject(Actions),
        addressService = inject(AddressService)
    ) => {
        return actions$.pipe(
            ofType(checkoutActions.getAddress),
            switchMap(() => {
                return addressService.getAddress().pipe(
                    map((response) => {
                        console.log(response);

                        return checkoutActions.getAddressSuccess(response)
                    }),
                    catchError((e: HttpErrorResponse) => (
                        of(
                            checkoutActions.getAddressFailure(e.error)
                        )
                    ))
                )
            })
        )
    },
    {
        functional: true
    }
)