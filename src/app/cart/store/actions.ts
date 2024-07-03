import { createActionGroup, props } from "@ngrx/store";
import { ProductInterface } from "../../products page/types/products.interface";

export const cartActions = createActionGroup({

    source: 'cartActions',
    events: {
        'AddtoCart': props<{ product: ProductInterface }>()
    }

})