import { createActionGroup, props } from "@ngrx/store";
import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { ProductInterface } from "../../products page/types/products.interface";

export const singleProductActions = createActionGroup({
    source: 'singleProduct',
    events: {
        'getProduct': props<{ productId: string }>(),
        'getProduct Success': props<{ product: ProductInterface }>(),
        'getProduct Failure': props<{ error: BackendErrorsInterface }>()
    }
})