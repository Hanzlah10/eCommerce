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
import { AddressService } from "../../services/address.service";
import { cartActions } from "../../../cart/store/actions";

@Component({
    selector: 'app-checkout',
    imports: [FormsModule, CommonModule, RouterModule, AddAddressComponent],
    templateUrl: './checkout.component.html',
    standalone: true,
    styleUrl: './checkout.component.css'
})

export class CheckoutComponent implements OnInit {

    TotalData$ = combineLatest({
        CartState: this.store.select(selectCartState),
        AddressState: this.store.select(selectAddresses)
    })
    isAddingAddress: boolean = false


    ngOnInit(): void {
        this.store.dispatch(checkoutActions.getAddress())
    }

    editAddress(id:string){
        
    }

    toggleIsAddingAddress() {
        this.isAddingAddress = !this.isAddingAddress
    }


    removeItem(productId: string) {
        this.store.dispatch(cartActions.removeCartItem({ productId }))
    }


    increment(productId: string, count: number) {
        if (count < 10) {
            this.store.dispatch(cartActions.addToCart({ productId: productId, quantity: ++count }))
        }
    }

    decrement(productId: string, count: number) {
        if (count > 1) {
            this.store.dispatch(cartActions.addToCart({ productId: productId, quantity: --count }))
        }
    }
    constructor(private store: Store) { }


}

