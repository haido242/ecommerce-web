import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney'
})
export class FormatMoney implements PipeTransform {

  transform(value: number): any {
    if (!value) {
      return value;
    }
    return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
  }

}