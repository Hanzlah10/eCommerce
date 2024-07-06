import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from "primeng/api";
import { cartActions } from "./actions";
import { catchError, map, of, switchMap, take, tap } from "rxjs";
import { cartService } from "../services/cart.service";
import { CartInterface } from "../types/cart.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { CartItemInterface } from "../types/cartItem.interface";

export const getItemEffect = createEffect(
    (
        action$ = inject(Actions),
        CartService = inject(cartService)
    ) => {
        return action$.pipe(
            ofType(cartActions.getCarItems),
            switchMap(() => {
                return CartService.getUserCart().pipe(map(
                    (cartItem: CartInterface) => {
                        return cartActions.getCartItemsSuccess(cartItem)
                    }
                ), catchError((errorResponse: HttpErrorResponse) => {
                    return of(
                        cartActions.getCartItemsFailure(errorResponse.error)
                    )
                }
                )
                )
            })
        )
    }, { functional: true }
)

export const addtoCartEffect = createEffect(
    (
        actions$ = inject(Actions),
        CartService = inject(cartService),
        messageService = inject(MessageService)
    ) => {
        return actions$.pipe(
            ofType(cartActions.addToCart),
            switchMap(({ productId, quantity }) => {
                return CartService.updateUserCart(productId, quantity).pipe(map(
                    (cartItem: CartInterface) => {
                        console.log(quantity + " from egge");

                        messageService.add({ severity: 'success', summary: 'Updated Cart', detail: 'Updated Cart successfully', life: 800 });
                        return cartActions.addToCartSuccess(cartItem)
                    }
                ),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            cartActions.addToCartFailure(errorResponse.error)
                        )
                    })
                )
            })
        )
    }, { functional: true }
)

export const removeCartItemEffects = createEffect(
    (
        actions$ = inject(Actions),
        CartService = inject(cartService),
        messageService = inject(MessageService)
    ) => {
        return actions$.pipe(
            ofType(cartActions.removeCartItem),
            switchMap(({ productId }) => {
                return CartService.removeCartItem(productId).pipe(map(
                    (cartItem: CartInterface) => {
                        messageService.add({ severity: 'error', summary: 'Removed Item', detail: 'removed Item successfully', life: 800 });
                        return cartActions.removeCartItemSuccess(cartItem)
                    }
                ),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            cartActions.removeCartItemFailure(errorResponse.error)
                        )
                    })
                )
            })
        )
    }, { functional: true }
)


export const clearCartItemEffects = createEffect(
    (
        actions$ = inject(Actions),
        CartService = inject(cartService),
        messageService = inject(MessageService)
    ) => {
        return actions$.pipe(
            ofType(cartActions.clearCartItem),
            switchMap(() => {
                return CartService.clearUserCart().pipe(map(
                    (cartItem: CartInterface) => {
                        messageService.add({ severity: 'error', summary: 'Cleared Cart', detail: 'removed Item successfully', life: 500 });
                        return cartActions.clearCartItemSuccess(cartItem)
                    }
                ),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                            cartActions.clearCartItemFailure(errorResponse.error)
                        )
                    })
                )
            })
        )
    }, { functional: true }
)




