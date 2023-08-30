import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from './interfaces/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigurationTableComponent {
  @Input() product: IProduct = {
    id: 0,
    img: '',
    name: '',
    price: 0,
  };

  constructor(private router: Router) {}

  navigateToTheCartPage() {
    this.router.navigate(['cart'], {
      state: { products: [this.product] },
    });
  }
}
