import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { PrimengModule } from './Modules/primeng.module';
import { NavbarComponent } from './Shared/components/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from './auth/store/reducers';
import { CurrentUserInterface } from './Shared/types/currentUser.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimengModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCommerce';
  constructor(public router: Router) {

  }

}