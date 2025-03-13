import { inject, Injectable } from "@angular/core";
import { signalSlice } from 'ngxtension/signal-slice';
import { Product } from "../../shared/interface/product.interface";
import { ProductService } from "./products.service";
import { map } from "rxjs";

interface State{
    products: Product[],
    state: 'loading' | 'success' | 'error',
}

@Injectable()
export class ProductStateService {

    private productService = inject(ProductService)
    private initialState: State = {
        products: [],
        state: 'loading' as const
    }
    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.productService.getProducts()
            .pipe(map((products) => ({products, status: 'success' as const}))),
        ]
    })
}