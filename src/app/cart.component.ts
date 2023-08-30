import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { IProduct } from './interfaces/IProduct';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  @Input() products: IProduct[] = [];
  @Output() updateProducts = new EventEmitter<IProduct[]>();

  constructor(private router: Router) {
    this.products =
      this.router.getCurrentNavigation()?.extras.state?.['products'];
  }
}
