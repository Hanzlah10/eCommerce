import { inject } from "@angular/core";
import { Actions, act, createEffect, ofType } from "@ngrx/effects";
import { getProductsService } from "../services/getProducts.service";
import { ProductsByCategoryAction } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { ProductInterface, ProductsByCategoryWithPagination } from "../types/products.interface";
import { HttpErrorResponse } from "@angular/common/http";

export const getProductsEffect = createEffect(
    (
        getProductService = inject(getProductsService),
        actions$ = inject(Actions)
    ) => {
        return actions$.pipe(
            ofType(ProductsByCategoryAction.getProducts),
            switchMap(({ categoryId }) => {
                return getProductService.getAllProducts(categoryId).pipe(
                    map((response: ProductsByCategoryWithPagination) => {
                        return ProductsByCategoryAction.getProductsSuccess({ response })
                    }),
                    catchError((errorResponse: HttpErrorResponse) =>
                        of(
                            ProductsByCategoryAction.getProductsFailure({
                                errors: errorResponse.error
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