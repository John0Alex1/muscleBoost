import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { baseHttpService } from "../../shared/data-access/base-http.service";
import { map, Observable } from "rxjs";
import { Product } from "../../shared/interface/product.interface";

@Injectable({
    providedIn: 'root'
})
export class ProductService extends baseHttpService {
    getProducts(): Observable<Product[]> {
        return this.http.get<{ data: Product[] }>(`${this.apiUrl}/products`)
            .pipe(map((response: { data: any; }) => response.data)); // Extraer `data`
    }
    getProduct(id: string): Observable<Product> {
        return this.http.get<{ data: Product }>(`${this.apiUrl}/products/${id}`)
            .pipe(map((response: { data: any; }) => response.data)); // Extraer `data`
    }
}