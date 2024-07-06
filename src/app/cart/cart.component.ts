import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCartTotal, selectDiscountedTotal, selectItems } from './store/reducers';
import { cartActions } from './store/actions';
import { cartService } from './services/cart.service';
import { combineLatest } from 'rxjs';
import { PrimengModule } from '../Modules/primeng.module';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, PrimengModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers: [ConfirmationService, MessageService]
})
export class CartComponent {

  @Input() IsCartVisible: boolean = false;
  @Output() isCartVisibleToggle = new EventEmitter<boolean>();


  toggleCart() {
    this.isCartVisibleToggle.emit(!this.IsCartVisible);
  }



  constructor(private store: Store, private confirmationService: ConfirmationService, private messageService: MessageService) {
    // constructor(private store: Store) {
    this.store.dispatch(cartActions.getCarItems())
  }



  data$ = combineLatest({
    cartTotal: this.store.select(selectCartTotal),
    discountedTotal: this.store.select(selectDiscountedTotal),
    cartItems: this.store.select(selectItems)
  })

  removeItem(productId: string) {
    console.log(productId);
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

  clearCart(event: Event) {

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Are you sure you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.store.dispatch(cartActions.clearCartItem())
      }
    });
  }
}




