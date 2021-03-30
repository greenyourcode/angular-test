import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexPipe'
})
export class IndexPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 0.5;
  }

}
