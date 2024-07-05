import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { CartItemInterface } from "../types/cartItem.interface";
import { ValidationErrors } from "@angular/forms";

export const cartActions = createActionGroup({

    source: 'cartActions',
    events: {
        'getCarItem': emptyProps(),
        'getCartItem Success': props<CartItemInterface>(),
        'getCartItem Failure': props<ValidationErrors>(),
    }
})

