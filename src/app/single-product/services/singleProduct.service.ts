import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable, map } from "rxjs";
import { ResponseSingleCategoryAPI, ResponseSingleProductAPI } from "../../Shared/types/respose.interface";
import { ProductInterface } from "../../products page/types/products.interface";
import { CategoryInterface } from "../../Shared/types/category.interface";

@Injectable({
    providedIn: 'root'
})


export class singleProductService {

    constructor(private http: HttpClient) { }

    getSingleProduct(id: string): Observable<ProductInterface> {
        let url = environment.apiUrl + `/ecommerce/products/${id}`
        return this.http.get<ResponseSingleProductAPI>(url).pipe(map(res => res.data))
    }

    getCategoryById(id: string): Observable<CategoryInterface> {
        let url = environment.apiUrl + `/ecommerce/categories/${id}`
        console.log(url);
        // http://localhost:8080/api/v1/ecommerce/categories/663766444b800c573bb970c9
        return this.http.get<ResponseSingleCategoryAPI>(url).pipe(map(res => res.data))
    }
}
