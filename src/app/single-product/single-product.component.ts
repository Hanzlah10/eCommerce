import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { singleProductActions } from './store/actions';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { selectProduct } from './store/reducers';
import { singleProductService } from './services/singleProduct.service';
import { cartActions } from '../cart/store/actions';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {


  categoryName: string | undefined
  product$ = this.store.select(selectProduct)
  categoryID: string | undefined
  category: string | undefined
  count = 1


  constructor(private store: Store, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    let route = this.route.snapshot.paramMap.get('productId') ?? ''
    this.categoryName = this.route.snapshot.paramMap.get('categoryName') ?? ''
    this.store.dispatch(singleProductActions.getProduct({ productId: route }))
  }


  addtoCart(productId: string) {
    this.store.dispatch(cartActions.addToCart({ productId: productId, quantity: this.count }))

  }

  increment() {
    if (this.count < 10) {
      this.count++
    }
  }
  decrement() {
    if (this.count > 1) {
      this.count--
    }
  }

}





// this.product$.subscribe(data => {
//   console.log(this.categoryID);

//   this.categoryID = data?.category
// })
// this.service.getCategoryById(this.categoryID ?? '').subscribe(data => {
//   this.category = data.name
//   console.log(this.category);

// }
// )