import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { CurrentUserInterface } from "../../Shared/types/currentUser.interface";
import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { LoginRequestInterface } from "../types/loginRequest.interface";

export const authActions = createActionGroup(
    {
        source: 'Auth',
        events: {
            'register': props<{ request: RegisterRequestInterface }>(),
            'register Success': emptyProps(),
            'register Failure': props<{ errors: BackendErrorsInterface }>(),
            'login': props<{ request: LoginRequestInterface }>(),
            'login Success': props<{ currentUser: CurrentUserInterface }>(),
            'login Failure': props<{ errors: BackendErrorsInterface }>(),
            'getCurrentUser': emptyProps(),
            'getCurrentUser Success': props<CurrentUserInterface>(),
            'getCurrentUser Failure': emptyProps(),
            'logout': emptyProps()
        }
    })