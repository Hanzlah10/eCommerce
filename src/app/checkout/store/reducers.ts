import { createFeature, createReducer, on } from "@ngrx/store";
import { AddressStateInterface } from "../types/addressState.interface";
import { checkoutActions } from "./actions";
import { AddressInterface } from "../types/Address.interface";

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
        })),
        on(checkoutActions.updateAddressSuccess, (state, action) => {

            let id = action._id
            for (let address of initialState.addresses) {
                if (id == address._id) {
                    address = action
                }
            }
            return {
                ...state
            }
        }),


        on(checkoutActions.deleteAddressSuccess, (state, action) => ({
            ...state,
            // addresses: [...state.addresses, action]
        }))
    )
})



export const { name: CheckoutFeatureKey, reducer: CheckoutReducer, selectAddresses, selectErrors } = CheckoutFeature

