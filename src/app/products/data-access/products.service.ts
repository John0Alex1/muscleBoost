import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { baseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { Product } from "../../shared/interface/product.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductService extends baseHttpService{
    getProducts(): Observable<Product[]>{
        return this.http.get<any[]>(`${this.apiUrl}/products`)
    }
}