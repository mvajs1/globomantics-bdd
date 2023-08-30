import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';

@Pipe({
  name: 'calculateTotalPrice',
})
export class CalculateTotalPrice implements PipeTransform {
  transform(array: IProduct[]): number {
    if (array) {
      return array.reduce((previousValue, currentValue) => {
        return previousValue + currentValue.price!;
      }, 0);
    } else {
      return 0;
    }
  }
}
