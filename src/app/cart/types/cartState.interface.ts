import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { CouponFormInterface, CouponInterface } from "../../checkout/types/coupon.interface";
import { CartItemInterface } from "./cartItem.interface";

export interface cartStateInterface {
    cartTotal: number,
    discountedTotal: number,
    items: CartItemInterface[] | [],
    errors: BackendErrorsInterface | null,
    coupon: CouponInterface | undefined | null,
}