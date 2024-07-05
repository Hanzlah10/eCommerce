import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map, retry } from "rxjs";
import { CartInterface } from "../types/cart.interface";
import { environment } from "../../../environments/environment.development";
import { CartResponseAPI } from "../../Shared/types/respose.interface";
import { ProductInterface } from "../../products page/types/products.interface";
import { PersistenceService } from "../../Shared/services/persistence.service";
import { CartItemInterface } from "../types/cartItem.interface";

@Injectable({
    providedIn: 'root'
})

export class cartService {

    constructor(private http: HttpClient, private persistenceService: PersistenceService) { }


    setTokenInHeaders(): object {
        const token = this.persistenceService.get('accessToken')
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const options = { headers }

        return options
    }

    getUserCart(): Observable<CartInterface> {

        const token = this.persistenceService.get('accessToken')
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const options = { headers }
        const url = environment.apiUrl + '/ecommerce/cart'

        return this.http.get<CartResponseAPI>(url, options).pipe(map(res => res.data))
    }

    updateUserCart(productId: string, quantity: number): Observable<CartInterface> {

        const token = this.persistenceService.get('accessToken')
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const data = { quantity: quantity }
        const options = { headers }
        const url = environment.apiUrl + `/ecommerce/cart/item/${productId}`
        return this.http.post<CartResponseAPI>(url, data, options).pipe(map(res => res.data))
    }


    removeCartItem(productId: string): Observable<CartInterface> {

        const token = this.persistenceService.get('accessToken')
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const options = { headers }
        const url = environment.apiUrl + `/ecommerce/cart/item/${productId}`
        return this.http.delete<CartResponseAPI>(url, options).pipe(map(res => res.data))
    }

    clearUserCart(): Observable<CartResponseAPI> {
        const token = this.persistenceService.get('accessToken')
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const options = { headers }

        const url = environment.apiUrl + `/ecommerce/cart/clear`
        return this.http.delete<CartResponseAPI>(url, options)
    }
}