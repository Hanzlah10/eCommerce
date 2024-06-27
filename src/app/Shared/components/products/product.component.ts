import { Component, Input, input } from "@angular/core";
import { PrimengModule } from "../../../Modules/primeng.module";
import { ProductInterface } from "../products page/types/products.interface";

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [PrimengModule],
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})

export class productComponent {

    @Input() product!: ProductInterface


}   