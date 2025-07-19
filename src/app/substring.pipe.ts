import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {

  transform(value: string, arg: number): string {
    if(value && value.length>=arg){
      return value.substring(0,arg)
    }
    return value;
  }

}
