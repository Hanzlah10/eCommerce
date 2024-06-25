import { AuthResponseInterface } from "../../auth/types/authResponse.interface";
import { CategoryInterface, Pagination } from "./category.interface";

export interface ResponseAPI {
    statusCode: number,
    data: AuthResponseInterface,
    message: string,
    success: boolean
}

export interface ResponseCategoryAPI {
    statusCode: number,
    data: Pagination,
    message: string,
    success: boolean
}