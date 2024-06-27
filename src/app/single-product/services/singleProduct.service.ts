import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable, map } from "rxjs";
import { ResponseSingleProductAPI } from "../../Shared/types/respose.interface";
import { ProductInterface } from "../../products page/types/products.interface";

@Injectable({
    providedIn: 'root'
})


export class singleProductService {

    constructor(private http: HttpClient) { }

    getSingleProduct(id: string): Observable<ProductInterface> {
        let url = environment.apiUrl + `/ecommerce/products/${id}`
        return this.http.get<ResponseSingleProductAPI>(url).pipe(map(res => res.data))
    }
}
