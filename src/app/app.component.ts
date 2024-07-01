import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { PrimengModule } from './Modules/primeng.module';
import { NavbarComponent } from './Shared/components/navbar/navbar.component';
import { FooterComponent } from './Shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimengModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCommerce';
  constructor(public router: Router) {

  }
  //oninit action dispatch get user


}