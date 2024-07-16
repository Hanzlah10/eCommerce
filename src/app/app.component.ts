import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { PrimengModule } from './Modules/primeng.module';
import { NavbarComponent } from './Shared/components/navbar/navbar.component';
import { FooterComponent } from './Shared/components/footer/footer.component';
import { authActions } from './auth/store/actions';
import { Store } from '@ngrx/store';
import { cartActions } from './cart/store/actions';
import { selectCurrentUser } from './auth/store/reducers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimengModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eCommerce';
  constructor(public router: Router, private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())

    let currentUser = this.store.select(selectCurrentUser)
    if (currentUser) {
      this.store.dispatch(cartActions.getCarItems())
    }

  }



}