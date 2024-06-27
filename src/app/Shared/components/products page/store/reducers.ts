import { createFeature, createReducer, on } from "@ngrx/store"
import { ProductsByCategoryAction } from "./actions"
import { productsStateInterface } from "../types/productsState.interface"

const initialState: productsStateInterface = {
    products: [],
    category: undefined,
    errors: null
}


const productsFeature = createFeature({
    name: 'products',
    reducer: createReducer(
        initialState,
        on(ProductsByCategoryAction.getProductsSuccess, (state, action) => ({
            ...state,
            category: action.response.category.name,
            products: action.response.products
        })),
        on(ProductsByCategoryAction.getProductsFailure, (state, action) => ({
            ...state,
            errors: action.errors
        })),


    )
})

export const { name: productFeatureJey, reducer: productResducer, selectCategory, selectErrors, selectProducts } = productsFeature