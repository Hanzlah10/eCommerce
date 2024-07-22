import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { AddressInterface } from "./Address.interface";

export interface AddressStateInterface {
    addresses: AddressInterface[],
    errors: BackendErrorsInterface | null
}