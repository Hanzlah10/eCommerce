import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AddressService } from "../services/address.service";
import { inject } from "@angular/core";
import { checkoutActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { MessageService } from "primeng/api";
import { CouponService } from "../services/coupon.service";

export const AddAddressEffects = createEffect(
    (
        actions$ = inject(Actions),
        addressService = inject(AddressService),
        messageService = inject(MessageService)

    ) => {
        return actions$.pipe(
            ofType(checkoutActions.addAddress),
            switchMap((address) => {
                return addressService.addAddress(address).pipe(
                    map((response) => {
                        messageService.add({ severity: 'success', summary: 'Added Address', detail: 'Added Address Successfully', life: 800 });

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


export const updateAddressEffect = createEffect(
    (
        actions$ = inject(Actions),
        addressService = inject(AddressService),
        messageService = inject(MessageService)

    ) => {
        return actions$.pipe(
            ofType(checkoutActions.updateAddress),
            switchMap(({ id, address }) => {
                return addressService.updateAddress(id, address).pipe(
                    map((response) => {
                        messageService.add({ severity: 'success', summary: 'Updated Address', detail: 'Updated Address Successfully', life: 800 });

                        return checkoutActions.updateAddressSuccess(response)
                    }),
                    catchError((e: HttpErrorResponse) => (
                        of(
                            checkoutActions.updateAddressFailure(e.error)
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
export const deleteAddressEffect = createEffect(
    (
        actions$ = inject(Actions),
        addressService = inject(AddressService),
        messageService = inject(MessageService)

    ) => {
        return actions$.pipe(
            ofType(checkoutActions.deleteAddress),
            switchMap(({ id }) => {
                return addressService.deleteAddress(id).pipe(
                    map((response) => {
                        messageService.add({ severity: 'error', summary: 'Deleted Address', detail: 'Deleted Address Successfully', life: 800 });

                        return checkoutActions.deleteAddressSuccess(response)
                    }),
                    catchError((e: HttpErrorResponse) => (
                        of(
                            checkoutActions.deleteAddressFailure(e.error)
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
export const applyCouponEffect = createEffect(
    (
        actions$ = inject(Actions),
        messageService = inject(MessageService),
        couponService = inject(CouponService)


    ) => {
        return actions$.pipe(
            ofType(checkoutActions.applyCoupon),
            switchMap((data) => {
                return couponService.applyCoupon(data.id).pipe(
                    map((response) => {
                        console.log(response);
                        messageService.add({ severity: 'success', summary: 'Coupon Applied', detail: 'Coupon Applied Successfully', life: 800 });

                        return checkoutActions.applyCouponSuccess(response)
                    }),
                    catchError((e: HttpErrorResponse) => (
                        of(
                            checkoutActions.deleteAddressFailure(e.error)
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
