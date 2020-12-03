import { Pipe, PipeTransform } from '@angular/core';

/*
 * Usage:
 *   value | paren
 * Example:
 *   {{ 'foo' | paren }}
 *   formats to: '（foo）'
*/
@Pipe({
  name: 'my'
})
export class ParenthesisPipe implements PipeTransform {
  transform(name: string, first: string, last: string ) { 
    console.log( " name= " + name + " first= " + first +" last= " + last)
  }
}