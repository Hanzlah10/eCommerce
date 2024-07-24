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
            return {
                ...state,
                addresses: state.addresses.map(addr =>
                    addr._id === action._id ? action : addr
                )
            }
        }),
        on(checkoutActions.deleteAddressSuccess, (state, action) => ({
            ...state,
            addresses: state.addresses.filter(address => address._id != action.deletedAddress._id)
        })),


    )
})



export const { name: CheckoutFeatureKey, reducer: CheckoutReducer, selectAddresses, selectErrors } = CheckoutFeature

