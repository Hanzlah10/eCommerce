import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Address, AddressInterface } from "../types/Address.interface";
import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { PaginatedAddressesInterface } from "../types/paginatedAddresses.interface";

export const checkoutActions = createActionGroup({
    source: 'CheckoutActions',
    events: {
        'Add Address': props<Address>(),
        'Add Address Success': props<AddressInterface>(),
        'Add Address Failure': props<BackendErrorsInterface>(),
        'Get Address': emptyProps(),
        'Get Address Success': props<PaginatedAddressesInterface>(),
        'Get Address Failure': props<BackendErrorsInterface>(),
    }
})