import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { singleProductActions } from './store/actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {


  constructor(private store: Store, private route: ActivatedRoute) { }
  ngOnInit(): void {
    let route = this.route.snapshot.paramMap.get('productId') ?? ''
    this.store.dispatch(singleProductActions.getProduct({ productId: route }))
  }

}
