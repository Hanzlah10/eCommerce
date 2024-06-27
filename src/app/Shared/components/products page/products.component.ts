import { Component, OnInit } from '@angular/core';
import { getProductsService } from './services/getProducts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {






  constructor(private service: getProductsService, private route: ActivatedRoute) { }

  catergoryId!: string

  ngOnInit(): void {
    this.catergoryId = this.route.snapshot.paramMap.get('categoryId') ?? '';
    console.log(this.catergoryId);
  }


}






