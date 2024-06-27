import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getProductsService } from "../services/getProducts.service";
import { ProductsByCategoryAction } from "./actions";
import { catchError, map, of, switchMap } from "rxjs";
import { ProductsByCategoryWithPagination } from "../types/products.interface";
import { HttpErrorResponse } from "@angular/common/http";

export const ProductsEffect = createEffect(
    (
        getProductService = inject(getProductsService),
        actions$ = inject(Actions)
    ) => {
        return actions$.pipe(
            ofType(ProductsByCategoryAction.getProducts),
            switchMap(({ categoryId }) => {
                return getProductService.getAllProducts(categoryId).pipe(
                    map((response: ProductsByCategoryWithPagination) => {
                        console.log(response);
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