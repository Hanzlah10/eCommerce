import { CouponInterface } from "../../checkout/types/coupon.interface";
import { CartItemInterface } from "./cartItem.interface";

export interface CartInterface {
    _id: string;
    cartTotal: number;
    coupon?: CouponInterface;
    discountedTotal: number;
    items: CartItemInterface[];
}
