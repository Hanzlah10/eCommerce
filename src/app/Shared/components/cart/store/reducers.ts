import { createFeature, createReducer, on } from "@ngrx/store"
import { cartActions } from "./actions"
import { cartStateInterface } from "../types/cartState.interface"

const initialState: cartStateInterface = {
    cartItems: []
}

const cartFeature = createFeature({
    name: 'cart',

    reducer: createReducer(
        initialState,
        on(cartActions.addtoCart, (state, action) => {
            let newProduct = action.product
            return {
                ...state,
                cartItems: [...state.cartItems, newProduct]
            }
        })
    )
})

export const { name: cartFeatureKey, reducer: cartReducer, selectCartItems } = cartFeature