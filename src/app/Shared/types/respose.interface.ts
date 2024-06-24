import { AuthResponseInterface } from "../../auth/types/authResponse.interface";

export interface ResponseAPI {
    statusCode: number,
    data: AuthResponseInterface,
    message: string,
    success: boolean
}