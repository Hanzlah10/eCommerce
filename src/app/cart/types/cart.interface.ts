import { CartItemInterface } from "./cartItem.interface";

export interface CartInterface {
    _id: string;
    cartTotal: number;
    discountedTotal: number;
    items: CartItemInterface[];
}
