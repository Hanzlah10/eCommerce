import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { selectCartState } from "../../cart/store/reducers";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-checkout',
    imports: [FormsModule, CommonModule],
    templateUrl: './checkout.component.html',
    standalone: true,
    styleUrl: './checkout.component.css'
})

export class CheckoutComponent {
    constructor(private store: Store) { }


    TotalData$ = this.store.select(selectCartState)
}