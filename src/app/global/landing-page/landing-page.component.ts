import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../Shared/components/navbar/navbar.component';
import { Store } from '@ngrx/store';
import { CategoryCardComponent } from '../../Shared/components/category-card/category-card.component';
import { categoryService } from '../services/category.service';
import { CategoryInterface } from '../../Shared/types/category.interface';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../Shared/components/carousel/carousel.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, CategoryCardComponent, CommonModule, CarouselComponent, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {


  constructor(private store: Store, private categoryService: categoryService) { }


  // ngOnInit(): void {
  //   this.cater.getAllCategories(1, 4).subscribe(data => (data))
  // }

  categories: CategoryInterface[] = [];
  // totalPages!: number;
  // currentPage: number = 1;
  // hasNextPage = false;
  // hasPrevPage = false;
  // limit: number = 25;
  // nextPage: number = 0;
  // prevPage: number | null = 0;
  // serialNumberStartFrom: number = 0;
  // totalCategories: number = 0;


  ngOnInit(): void {
    this.loadCategories();

  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data.categories;
      // this.totalPages = data.totalPages;
      // this.currentPage = data.page;
      console.log(data);  // Process the data as needed
      console.log(this.categories);

    });
  }


}



