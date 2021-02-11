import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaObject'
})
export class CommaObjectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return Object.keys(value).map((k) => value[k]).join(', ');
  }

}
