import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../data-access/products-state.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductListComponent {
  productsState = inject(ProductStateService)
}
