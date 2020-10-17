import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: string, maxLength: number): string{
    if( value === null ){
      return null
    }else if( value.length > (maxLength + 3) ){
      return value.substr(0, maxLength) + '...';
    }else{
      return value;
    }
  }

}
