import { inject, Injectable } from "@angular/core";
import { signalSlice } from 'ngxtension/signal-slice';
import { Product } from "../../shared/interface/product.interface";
import { ProductService } from "./products.service";
import { map } from "rxjs";

interface State{
    products: Product[],
    status: 'loading' | 'success' | 'error',
}

@Injectable()
export class ProductStateService {

    private productService = inject(ProductService);
    private initialState: State = {
        products: [],
        status: 'loading' as const
    };

    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.productService.getProducts()
                .pipe(map((response) => ({ products: response, status: 'success' as const })))
        ]
    });
    
}
