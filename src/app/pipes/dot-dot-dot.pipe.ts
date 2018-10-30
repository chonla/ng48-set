import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotDotDot'
})
export class DotDotDotPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value.length > length) {
      value = `${value.substr(0, length - 3)}...`;
    }
    return value;
  }

}
