import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PersistenceService } from "../../Shared/services/persistence.service";
import { Observable, map } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { CartInterface } from "../../cart/types/cart.interface";
import { CartResponseAPI } from "../../Shared/types/respose.interface";

@Injectable({
    providedIn: 'root'
})
export class CouponService {
    constructor(private http: HttpClient, private persistenceService: PersistenceService) { }

    applyCoupon(couponId: string | null): Observable<CartInterface> {
        const token = this.persistenceService.get('accessToken')

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const options = { headers };
        let url = environment.apiUrl + `/ecommerce/coupons/c/apply`

        return this.http.post<CartResponseAPI>(url, { couponCode: couponId }, options).pipe(map(res => res.data))

    }
}