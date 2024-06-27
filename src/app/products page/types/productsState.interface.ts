import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { ProductInterface } from "./products.interface";

export interface productsStateInterface {
    products: ProductInterface[],
    category: string | undefined,
    errors: null | BackendErrorsInterface
}