import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CartItemInterface } from "../types/cartItem.interface";
import { ValidationErrors } from "@angular/forms";
import { CartInterface } from "../types/cart.interface";

export const cartActions = createActionGroup({

    source: 'cartActions',
    events: {
        'getCarItems': emptyProps(),
        'getCartItems Success': props<CartInterface>(),
        'getCartItems Failure': props<ValidationErrors>(),
        'addToCart': props<CartItemInterface>(),
        'addToCart Success': props<CartInterface>(),
        'addToCart Failure': props<ValidationErrors>(),


    }
})

