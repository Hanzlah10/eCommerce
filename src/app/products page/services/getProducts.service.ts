import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable, map } from "rxjs";
import { ResponseProductsAPI } from "../../Shared/types/respose.interface";
import { ProductInterface, ProductsByCategoryWithPagination } from "../types/products.interface";

@Injectable({
    providedIn: 'root'
})


export class getProductsService {
    constructor(private http: HttpClient) { }

    getAllProducts(catId: string): Observable<ProductsByCategoryWithPagination> {
        let url = environment.apiUrl + `/ecommerce/products/category/${catId}`;
        console.log(url);
        return this.http.get<ResponseProductsAPI>(url).pipe(map(res => res.data))
    }
}