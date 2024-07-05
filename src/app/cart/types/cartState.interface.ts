import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { CartItemInterface } from "./cartItem.interface";

export interface cartStateInterface {
    cartTotal: number;
    discountedTotal: number;
    items: CartItemInterface[] | []
    errors: BackendErrorsInterface | null
}