import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { selectCartState } from "../../../cart/store/reducers";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AddAddressComponent } from "../addaddress/addaddress.component";

@Component({
    selector: 'app-checkout',
    imports: [FormsModule, CommonModule, RouterModule, AddAddressComponent],
    templateUrl: './checkout.component.html',
    standalone: true,
    styleUrl: './checkout.component.css'
})

export class CheckoutComponent {

    TotalData$ = this.store.select(selectCartState)
    isAddingAddress: boolean = false

    toggleIsAddingAddress() {
        this.isAddingAddress = !this.isAddingAddress
    }

    constructor(private store: Store) { }

}

