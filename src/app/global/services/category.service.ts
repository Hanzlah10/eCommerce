import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { PaginationInterface } from "../../Shared/types/category.interface";
import { HttpClient } from "@angular/common/http";
import { ResponseCategoryAPI } from "../../Shared/types/respose.interface";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})

export class categoryService {

    constructor(private http: HttpClient) { }

    getAllCategories(): Observable<PaginationInterface> {
        // let url = `http://localhost:8080/api/v1/ecommerce/categories?page=1&limit=25`
        let url = environment.apiUrl + `/ecommerce/categories?page=1&limit=25`
        return this.http.get<ResponseCategoryAPI>(url).pipe(map(res => res.data))
    }
}