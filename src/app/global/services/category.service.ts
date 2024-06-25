import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { CategoryInterface, Pagination } from "../../Shared/types/category.interface";
import { HttpClient } from "@angular/common/http";
import { ResponseAPI, ResponseCategoryAPI } from "../../Shared/types/respose.interface";
import { environment } from "../../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})

export class categoryService {

    constructor(private http: HttpClient) { }

    getAllCategories(page: number, limit: number): Observable<Pagination> {
        let url = environment.apiUrl + `/ecommerce/categories?page=${page}&limit=${limit}`
        return this.http.get<ResponseCategoryAPI>(url).pipe(map(res => res.data))
    }
}