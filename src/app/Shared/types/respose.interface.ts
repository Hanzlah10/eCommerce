import { AuthResponseInterface } from "../../auth/types/authResponse.interface";
import { CartInterface } from "../../cart/types/cart.interface";
import { CartItemInterface } from "../../cart/types/cartItem.interface";
import { AddressInterface } from "../../checkout/types/Address.interface";
import { PaginatedAddressesInterface } from "../../checkout/types/paginatedAddresses.interface";
import { ProductInterface, ProductsByCategoryWithPagination } from "../../products page/types/products.interface";
import { CategoryInterface, PaginationInterface } from "./category.interface";
import { CurrentUserInterface } from "./currentUser.interface";

export interface ResponseAPI {
    statusCode: number,
    data: AuthResponseInterface,
    message: string,
    success: boolean
}
export interface ResponseUserAPI {
    statusCode: number,
    data: CurrentUserInterface,
    message: string,
    success: boolean
}

export interface ResponseCategoryAPI {
    statusCode: number,
    data: PaginationInterface,
    message: string,
    success: boolean
}
export interface ResponseProductsAPI {
    statusCode: number,
    data: ProductsByCategoryWithPagination,
    message: string,
    success: boolean
}
export interface ResponseSingleProductAPI {
    statusCode: number,
    data: ProductInterface,
    message: string,
    success: boolean
}
export interface ResponseSingleCategoryAPI {
    statusCode: number,
    data: CategoryInterface,
    message: string,
    success: boolean
}
export interface CartResponseAPI {
    data: CartInterface;
    message: string;
    statusCode: number;
    success: boolean;
}
export interface ResponseAddressAPI {
    data: AddressInterface;
    message: string;
    statusCode: number;
    success: boolean;
}

export interface ResponsePaginatedAddressesAPI {
    data: PaginatedAddressesInterface;
    message: string;
    statusCode: number;
    success: boolean;
}





