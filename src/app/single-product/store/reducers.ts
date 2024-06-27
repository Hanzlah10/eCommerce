import { createFeature, createReducer, on } from "@ngrx/store";
import { SingleProductInterface } from "../types/singleprod.interface";
import { singleProductActions } from "./actions";


const initialState: SingleProductInterface = {
    product: null
}

const singleProductFeature = createFeature({
    name: 'singleProd',
    reducer: createReducer(
        initialState,
        on(singleProductActions.getProductSuccess, (state, action) => ({
            ...state,
            product: action.product
        })),
        on(singleProductActions.getProductFailure, (state, action) => ({
            ...state,
            errors: action.error
        })),
    )
})


export const { name: singleProdFeatureKey, reducer: singleProdReducer, selectProduct } = singleProductFeature