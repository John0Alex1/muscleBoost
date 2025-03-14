import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsStateService } from '../../data-access/products-details-state.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  providers: [ProductDetailsStateService]
})
export default class ProductDetailsComponent {

  productDetailsState = inject(ProductDetailsStateService).state

  id = signal<string | null>(null);
  route = inject(ActivatedRoute);

  constructor() {
    effect(() => {
      this.productDetailsState.getById(this.id()!)
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id.set(params.get('id'));
    });
  }
}
