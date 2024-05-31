import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'utcToLocal'
})
export class UtcToLocalPipe implements PipeTransform {

  transform(value: string | Date, format: string = 'dd MMM yyyy'): string | null {
    if (!value) return null;
    const utcDate = new Date(value);
    const localDate = new Date(utcDate.getTime());
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(localDate, format);
  }
}
