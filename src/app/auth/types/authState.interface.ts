import { BackendErrorsInterface } from "../../Shared/types/backendErrors.interface";
import { CurrentUserInterface } from "../../Shared/types/currentUser.interface";

export interface AuthStateInterface {
    isSubmitting: boolean;
    currentUser: CurrentUserInterface | null | undefined;
    isLoading: boolean;
    validationErrors: BackendErrorsInterface | null;
}
