import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Shared/components/navbar/navbar.component';

import { Store } from '@ngrx/store';
import { CategoryCardComponent } from '../../Shared/components/category-card/category-card.component';
import { categoryService } from '../services/category.service';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, CategoryCardComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {


  constructor(private store: Store, private cater: categoryService) { }


  ngOnInit(): void {
    let data$ = this.cater.getAllCategories(1, 4).subscribe(data => (data))
  }




}
