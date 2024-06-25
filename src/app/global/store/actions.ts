import { ValidationErrors } from "@angular/forms";
import { createActionGroup, props } from "@ngrx/store";
import { PaginationInterface } from "../../Shared/types/category.interface";

export const LoadCatergoryActions = createActionGroup({
    source: "Category",
    events: {
        'LoadCategory': props<{ page: number, limit: number }>(),
        'LoadCategory Success': props<PaginationInterface>(),
        'LoadCategory Failure': props<ValidationErrors>(),
    }
})