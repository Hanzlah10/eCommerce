import { Actions, createEffect, ofType } from "@ngrx/effects";
import { singleProductService } from "../services/singleProduct.service";
import { inject } from "@angular/core";
import { singleProductActions } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { ProductInterface } from "../../products page/types/products.interface";
import { HttpErrorResponse } from "@angular/common/http";

export const singleProductEffects = createEffect(
    (
        prodService = inject(singleProductService),
        actions$ = inject(Actions)
    ) => {
        return actions$.pipe(
            ofType(singleProductActions.getProduct),
            switchMap(({ productId }) => {
                return prodService.getSingleProduct(productId).pipe(
                    map((response: ProductInterface) => {
                        console.log(response);
                        return singleProductActions.getProductSuccess({ product: response })
                    }),
                    catchError((error: HttpErrorResponse) =>
                        of(
                            singleProductActions.getProductFailure({ error: error.error })
                        )
                    )
                )
            })
        )
    },
    { functional: true }
)