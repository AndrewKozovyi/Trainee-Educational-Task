import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleZero'
})
export class DoubleZeroPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value === 0) {
      return '00';
    }

    if (`${value}`.length === 2) {
      return value;
    }

    return `0${value}`;
  }

}
