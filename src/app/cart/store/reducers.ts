import { createFeature, createReducer, on } from "@ngrx/store"
import { cartActions } from "./actions"
import { cartStateInterface } from "../types/cartState.interface"

const initialState: cartStateInterface = {
    cartTotal: 0,
    discountedTotal: 0,
    errors: null,
    items: []
}

const cartFeature = createFeature({
    name: 'cart',
    reducer: createReducer(
        initialState,
        on(cartActions.getCartItemsSuccess, (state, action) => ({
            ...state,
            items: action.items,
            cartTotal: action.cartTotal,
            discountedTotal: action.discountedTotal
        })),

        on(cartActions.addToCartSuccess, (state, action) => ({
            ...state,
            items: action.items,
            cartTotal: action.cartTotal,
            discountedTotal: action.discountedTotal
        })),
        on(cartActions.removeCartItemSuccess, (state, action) => ({
            ...state,
            items: action.items,
            cartTotal: action.cartTotal,
            discountedTotal: action.discountedTotal
        })),

    )
})

export const {
    name: cartFeatureKey,
    reducer: cartReducer,
    selectCartTotal,
    selectDiscountedTotal,
    selectItems
} = cartFeature


