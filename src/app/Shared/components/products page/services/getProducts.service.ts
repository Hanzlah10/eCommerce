import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})


export class getProductsService {
    constructor(private http: HttpClient) { }

    getAllProducts(catId: string) {

    }
}