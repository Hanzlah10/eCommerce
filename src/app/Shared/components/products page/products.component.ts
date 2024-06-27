import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductsByCategoryAction } from './store/actions';
import { combineLatest } from 'rxjs';
import { selectCategory, selectProducts } from './store/reducers';
import { productComponent } from '../products/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [productComponent, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {



  products$ = this.store.select(selectProducts)
  category$ = this.store.select(selectCategory)


  constructor(private store: Store, private route: ActivatedRoute) { }

  catergoryId!: string

  ngOnInit(): void {
    this.catergoryId = this.route.snapshot.paramMap.get('categoryId') ?? '';
    console.log(this.catergoryId);
    this.store.dispatch(ProductsByCategoryAction.getProducts({ categoryId: this.catergoryId }))
  }


}






