import { Component, Input, input } from "@angular/core";
import { PrimengModule } from "../../../Modules/primeng.module";
import { ProductInterface } from "../../../products page/types/products.interface";
import { RouterLink } from "@angular/router";
import { Store } from "@ngrx/store";
import { cartActions } from "../../../cart/store/actions";

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [PrimengModule, RouterLink],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})

export class productComponent {

    constructor(private store: Store) { }
    @Input() product!: ProductInterface
    @Input() categoryName !: string

    addtoCart(product: ProductInterface) {
        this.store.dispatch(cartActions.addtoCart({ product }))
    }
}   