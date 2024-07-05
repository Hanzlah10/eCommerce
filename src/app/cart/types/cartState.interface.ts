import { ProductInterface } from "../../products page/types/products.interface";

export interface cartStateInterface {
    cartItems: { [id: string]: ProductInterface }
    totalQuantity: number,
    totalPrice: number
}