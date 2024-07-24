import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Address, AddressInterface, DeletedAddressInterface } from "../types/Address.interface";
import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { PaginatedAddressesInterface } from "../types/paginatedAddresses.interface";
import { CartInterface } from "../../cart/types/cart.interface";

export const checkoutActions = createActionGroup({
    source: 'CheckoutActions',
    events: {
        'Add Address': props<Address>(),
        'Add Address Success': props<AddressInterface>(),
        'Add Address Failure': props<BackendErrorsInterface>(),
        'Get Address': emptyProps(),
        'Get Address Success': props<PaginatedAddressesInterface>(),
        'Get Address Failure': props<BackendErrorsInterface>(),
        'Update Address': props<{ id: string | null, address: Address }>(),
        'Update Address Success': props<AddressInterface>(),
        'Update Address Failure': props<BackendErrorsInterface>(),
        'Delete Address': props<{ id: string | null }>(),
        'Delete Address Success': props<DeletedAddressInterface>(),
        'Delete Address Failure': props<BackendErrorsInterface>(),
        'Apply Coupon': props<{ id: string | null }>(),
        'Apply Coupon Success': props<CartInterface>(),
        'Apply Coupon Failure': props<BackendErrorsInterface>(),

    }
})