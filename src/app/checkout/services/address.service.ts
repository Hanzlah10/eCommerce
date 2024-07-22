import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Address, AddressInterface } from "../types/Address.interface";
import { ResponseAddressAPI, ResponsePaginatedAddressesAPI } from "../../Shared/types/respose.interface";
import { environment } from "../../../environments/environment.development";
import { Observable, map } from "rxjs";
import { PersistenceService } from "../../Shared/services/persistence.service";
import { PaginatedAddresses } from "../types/paginatedAddresses.interface";

@Injectable({
    providedIn: 'root'
})

export class AddressService {

    constructor(private http: HttpClient, private persistenceService: PersistenceService) { }



    addAddress(address: Address): Observable<AddressInterface> {

        const token = this.persistenceService.get('accessToken')

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const options = { headers };


        let url = environment.apiUrl + '/ecommerce/addresses'
        return this.http.post<ResponseAddressAPI>(url, address, options).pipe(map(res => res.data))
    }

    getAddress(): Observable<PaginatedAddresses> {
        const token = this.persistenceService.get('accessToken')

        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        });
        const options = { headers };

        let url = environment.apiUrl + '/ecommerce/categories?page=1&limit=5'
        return this.http.get<ResponsePaginatedAddressesAPI>(url, options).pipe(map(res => res.data))

    }
}