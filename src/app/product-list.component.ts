import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IProduct as IProduct } from './interfaces/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  defaultModel: IProduct = {};
  model: IProduct = { ...this.defaultModel };
  products: IProduct[] = [
    {
      id: 1,
      img: '../assets/charger.png',
      name: 'Phone Charger',
      price: 15,
    },
    {
      id: 2,
      img: '../assets/mouse.png',
      name: 'Mouse',
      price: 10,
    },
    {
      id: 3,
      img: '../assets/printer.png',
      name: 'Printer',
      price: 200,
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
