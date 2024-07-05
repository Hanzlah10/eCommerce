import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MessageService } from "primeng/api";
import { cartActions } from "./actions";
import { take, tap } from "rxjs";

export const addtoCartEffect = createEffect(
    (
        action$ = inject(Actions),
        messageService = inject(MessageService)
    ) => {
        return action$.pipe(
            // ofType(cartActions.getCarItem),
            take(1),
            tap(() => {
                messageService.add({ severity: 'secondary', summary: 'Item Added !' })
            })
        )
    }, { functional: true }
)



