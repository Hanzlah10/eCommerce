import { Component } from '@angular/core';
import { NavbarComponent } from '../../Shared/components/navbar/navbar.component';

import { Store } from '@ngrx/store';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


  constructor(private store: Store) { }


}
