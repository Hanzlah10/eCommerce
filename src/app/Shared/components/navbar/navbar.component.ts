import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { selectCurrentUser } from '../../../auth/store/reducers';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DarkmodeToggleComponent } from '../darkmode-toggle/darkmode-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, DarkmodeToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private store: Store) { }

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  })
}
