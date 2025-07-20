import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../model/book';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Book[], ...args: unknown[]): Book[] {
    if(value){
      return value.sort((a:Book, b:Book)=>{
        if(a.booktitle<b.booktitle){
          return -1;
        } else if(b.booktitle<a.booktitle){
          return 1;
        }
        return 0;

      })
    }
    return [];
  }

}
