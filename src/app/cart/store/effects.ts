import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from "primeng/api";
import { cartActions } from "./actions";
import { catchError, map, of, switchMap, take, tap } from "rxjs";
import { cartService } from "../services/cart.service";
import { CartInterface } from "../types/cart.interface";
import { HttpErrorResponse } from "@angular/common/http";

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
                ))
            })
        )
    }, { functional: true }
)






