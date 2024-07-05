import { ProductInterface } from "../../products page/types/products.interface";

export interface CartItemInterface {
    _id: string;
    coupon?: string | null;
    product: ProductInterface;
    quantity: number;
}



