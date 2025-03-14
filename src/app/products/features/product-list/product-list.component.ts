import { Component, inject } from '@angular/core';
import { ProductStateService } from '../../data-access/products-state.service';
import { ProductCardComponent } from '../../ui/product-card/product-card.component';
import { ProductSliderComponent } from "../../ui/product-slider/product-slider.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, ProductSliderComponent, ProductSliderComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductListComponent {
  productsState = inject(ProductStateService)
}
