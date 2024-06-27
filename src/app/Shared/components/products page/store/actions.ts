import { createActionGroup, props } from "@ngrx/store";
import { ProductsByCategoryWithPagination } from "../types/products.interface";
import { BackendErrorsInterface } from "../../../types/backendErrors.interface";

export const ProductsByCategoryAction = createActionGroup({
    source: 'ProductsByCategory',
    events: {
        'getProducts': props<{ categoryId: string }>(),
        'getProductsSuccess': props<{ response: ProductsByCategoryWithPagination }>(),
        'getProductsFailure': props<{ errors: BackendErrorsInterface }>()
    }
})