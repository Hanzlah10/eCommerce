import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { ValidationErrors } from "@angular/forms";
import { CartInterface } from "../types/cart.interface";

export const cartActions = createActionGroup({

    source: 'cartActions',
    events: {
        'getCarItems': emptyProps(),
        'getCartItems Success': props<CartInterface>(),
        'getCartItems Failure': props<ValidationErrors>(),
        'addToCart': props<{ productId: string, quantity: number }>(),
        'addToCart Success': props<CartInterface>(),
        'addToCart Failure': props<ValidationErrors>(),
        'removeCartItem': props<{ productId: string }>(),
        'removeCartItem Success': props<CartInterface>(),
        'removeCartItem Failure': props<ValidationErrors>(),
        'clearCartItem': emptyProps(),
        'clearCartItem Success': props<CartInterface>(),
        'clearCartItem Failure': props<ValidationErrors>(),
    }
})

