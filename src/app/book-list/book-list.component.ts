import { Component } from '@angular/core';
import { Book } from '../model/book';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { SubstringPipe } from '../pipes/substring.pipe';
import { NumericDirective } from '../directives/numeric.directive';
import { SortPipe } from '../pipes/sort.pipe';
import { BooksService } from '../services/book.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-book-list',
  imports: [BookDetailComponent, SortPipe, SubstringPipe],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  columnNames: string[] = ['id','isbn','booktitle','bookauthor','yearofpublication','publisher','imageurlm'];
  books: Book[] = [];

  selectedBook: Book | undefined;

  constructor(private bookService: BooksService){
    
  }
  
  ngOnInit(): void{
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
      console.log(books.length);
    });
  }

  onAdded(book:Book){
    alert(`Title: ${book.booktitle} added to the cart!`);
  }
}
