import { Component, input } from '@angular/core';
import { Product } from '../../../shared/interface/product.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-card',
  standalone: true, // ✅ Es standalone
  imports: [CommonModule, RouterLink], // ✅ Importa CommonModule para usar pipes como currency
  templateUrl: './product-card.component.html',
  styles: []
})
export class ProductCardComponent {
  product = input.required<Product>();
}
