import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Store } from "@ngrx/store";
import { selectCartState } from "../../../cart/store/reducers";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AddAddressComponent } from "../addaddress/addaddress.component";
import { checkoutActions } from "../../store/actions";
import { combineLatest } from "rxjs";
import { selectAddresses } from "../../store/reducers";
import { cartActions } from "../../../cart/store/actions";
import { Address } from "../../types/Address.interface";

@Component({
    selector: 'app-checkout',
    imports: [FormsModule, CommonModule, RouterModule, AddAddressComponent],
    templateUrl: './checkout.component.html',
    standalone: true,
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    TotalData$ = combineLatest({
        CartState: this.store.select(selectCartState),
        AddressState: this.store.select(selectAddresses)
    });
    isAddingAddress: boolean = false;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.store.dispatch(checkoutActions.getAddress());
    }

    toggleIsAddingAddress() {
        this.isAddingAddress = !this.isAddingAddress;
    }

    handleFormData(address: Address) {
        this.store.dispatch(checkoutActions.addAddress(address));
        this.toggleIsAddingAddress(); // Hide the add address form after submission
    }

    removeItem(productId: string) {
        this.store.dispatch(cartActions.removeCartItem({ productId }));
    }

    increment(productId: string, count: number) {
        if (count < 10) {
            this.store.dispatch(cartActions.addToCart({ productId: productId, quantity: ++count }));
        }
    }

    decrement(productId: string, count: number) {
        if (count > 1) {
            this.store.dispatch(cartActions.addToCart({ productId: productId, quantity: --count }));
        }
    }
}
