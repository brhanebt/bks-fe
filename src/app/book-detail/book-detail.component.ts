import { Component,input, OnChanges, output, SimpleChanges } from '@angular/core';
import { Book } from '../model/book';
import { SubstringPipe } from '../pipes/substring.pipe';

@Component({
  selector: 'app-book-detail',
  imports: [SubstringPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.scss'
})
export class BookDetailComponent implements OnChanges{
  book=input<Book>();
  added=output<Book>();
  ngOnChanges(changes: SimpleChanges): void {
    const b= changes['book'];
    if(!b.isFirstChange()){
      console.log('b.oldValue: ', b.previousValue, ' , b.newValue; ', b.currentValue);
    } else{
        console.log('Changing for the first time!');
    }
  }

  addToCart(){
    this.added.emit(this.book()!);
  }
}
