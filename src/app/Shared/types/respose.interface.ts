import { AuthResponseInterface } from "../../auth/types/authResponse.interface";
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