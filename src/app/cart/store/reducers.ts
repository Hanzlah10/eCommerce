import { createFeature, createReducer, on } from "@ngrx/store"
import { cartActions } from "./actions"
import { cartStateInterface } from "../types/cartState.interface"
import { checkoutActions } from "../../checkout/store/actions"

const initialState: cartStateInterface = {
    cartTotal: 0,
    discountedTotal: 0,
    errors: null,
    items: [],
    coupon: undefined
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
        on(cartActions.clearCartItemSuccess, (state, action) => ({
            ...state,
            items: action.items,
            cartTotal: action.cartTotal,
            discountedTotal: action.discountedTotal
        })),
        on(checkoutActions.applyCouponSuccess, (state, action) => ({
            ...state,
            items: action.items,
            cartTotal: action.cartTotal,
            discountedTotal: action.discountedTotal,
            coupon: action.coupon
        })),
    )
})

export const {
    name: cartFeatureKey,
    reducer: cartReducer,
    selectCartTotal,
    selectDiscountedTotal,
    selectItems,
    selectCartState
} = cartFeature


