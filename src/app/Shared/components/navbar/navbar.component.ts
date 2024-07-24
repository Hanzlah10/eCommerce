import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  @ViewChild('userDropdown') userDropdown!: ElementRef;
  @ViewChild('userMenuButton') userMenuButton!: ElementRef;

  isCartVisible = false;
  showDropDown = false;
  mobileMenuOpen = false;

  constructor(private store: Store, private elementRef: ElementRef) { }

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  });

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  onCartToggle(isVisible: boolean) {
    this.isCartVisible = isVisible;
  }

  signOut() {
    this.store.dispatch(authActions.logout());
    this.toggleDropDown();
  }

  toggleDropDown(event?: Event) {
    event?.stopPropagation();
    this.showDropDown = !this.showDropDown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.showDropDown) {
      const targetElement = event.target as HTMLElement;
      if (!this.elementRef.nativeElement.contains(targetElement)) {
        this.showDropDown = false;
      }
    }
  }
}