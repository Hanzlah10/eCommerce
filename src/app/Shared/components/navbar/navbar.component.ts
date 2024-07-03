import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DarkmodeToggleComponent } from '../darkmode-toggle/darkmode-toggle.component';
import { CartComponent } from '../../../cart/cart.component';
import { authActions } from '../../../auth/store/actions';
import { PrimengModule } from '../../../Modules/primeng.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, DarkmodeToggleComponent, CartComponent, PrimengModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  isCartVisible = false;
  showDropDown = false
  constructor(private store: Store) { }

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  })

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  onCartToggle(isVisible: boolean) {
    this.isCartVisible = isVisible;
  }

  signOut() {
    this.store.dispatch(authActions.logout())
    this.toggleDropDown()
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown
  }


}
