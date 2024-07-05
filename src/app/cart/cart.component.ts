import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectItems } from './store/reducers';
import { cartActions } from './store/actions';
import { cartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  @Input() IsCartVisible: boolean = false;
  @Output() isCartVisibleToggle = new EventEmitter<boolean>();

  toggleCart() {
    this.isCartVisibleToggle.emit(!this.IsCartVisible);
  }


  constructor(private store: Store, private ser: cartService) {
    this.store.dispatch(cartActions.getCarItems())
  }


  cartItems$ = this.store.select(selectItems)

  removeItem(productId: string) {
    console.log(productId);
    // this.ser.removeCartItem(productId)
    this.store.dispatch(cartActions.removeCartItem({ productId }))
  }
}


