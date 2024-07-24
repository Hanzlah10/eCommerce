import { CouponInterface } from "../../checkout/types/coupon.interface";
import { ProductInterface } from "../../products page/types/products.interface";

export interface CartItemInterface {
    _id: string;
    coupon?: CouponInterface
    product: ProductInterface;
    quantity: number;
}



