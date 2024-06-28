import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

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
}

