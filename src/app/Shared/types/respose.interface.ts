import { AuthResponseInterface } from "../../auth/types/authResponse.interface";
import { ProductInterface, ProductsByCategoryWithPagination } from "../components/products page/types/products.interface";
import { PaginationInterface } from "./category.interface";

export interface ResponseAPI {
    statusCode: number,
    data: AuthResponseInterface,
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



