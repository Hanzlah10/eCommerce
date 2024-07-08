import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./actions";
import { Action } from "rxjs/internal/scheduler/Action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    validationErrors: null
}

const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, (state) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })),
        on(authActions.registerSuccess, (state) => ({
            ...state,
            isSubmitting: false,
        })),
        on(authActions.registerFailure, (state, action) => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })),
        on(authActions.login, (state) => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })),
        on(authActions.loginSuccess, (state, action) => ({
            ...state,
            isSubmitting: false,
            currentUser: action.currentUser
        })),
        on(authActions.loginFailure, (state, action) => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })),
        on(authActions.getCurrentUser, (state) => ({
            ...state,
            isLoading: true,
        })),
        on(authActions.getCurrentUserSuccess, (state, action) => {
            return {
                ...state,
                isLoading: false,
                currentUser: action
            }
        }),
        on(authActions.getCurrentUserFailure, (state) => ({
            ...state,
            isLoading: false,
            currentUser: null,
        })),
        on(authActions.logout, (state) => ({
            ...state,
            currentUser: null
        }))
    )

})

export const {
    name: authFeatureKey,
    reducer: authReducer,
    selectIsSubmitting,
    selectIsLoading,
    selectCurrentUser,
    selectValidationErrors
} = authFeature