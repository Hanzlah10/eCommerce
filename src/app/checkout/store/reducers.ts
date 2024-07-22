import { createFeature, createReducer, on } from "@ngrx/store";
import { AddressStateInterface } from "../types/addressState.interface";
import { checkoutActions } from "./actions";

const initialState: AddressStateInterface = {
    addresses: [],
    errors: null
}


const CheckoutFeature = createFeature({
    name: 'checkout',
    reducer: createReducer(
        initialState,
        on(checkoutActions.getAddressSuccess, (state, action) => ({
            ...state,
            addresses: action.addresses
        })),
        on(checkoutActions.addAddressSuccess, (state, action) => ({
            ...state,
            addresses: [...state.addresses, action]
        }))
    )
})



export const { name: CheckoutFeatureKey, reducer: CheckoutReducer, selectAddresses, selectErrors } = CheckoutFeature

