import { Component } from '@angular/core';
import { Book } from '../book';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { SubstringPipe } from '../substring.pipe';
import { SortPipe } from '../sort.pipe';
@Component({
  selector: 'app-book-list',
  imports: [BookDetailComponent, SortPipe, SubstringPipe],
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  columnNames: string[] = ['id','isbn','booktitle','bookauthor','yearofpublication','publisher','imageurlm'];
  books: Book[] = [
      {id:1,isbn:'0671010115',booktitle:'GONE FISHIN : Featuring an Original Easy Rawlins Short Story Smoke (Easy Rawlins Mysteries (Paperback))',bookauthor:'Walter Mosley',yearofpublication:1998,publisher:'Pocket',imageurls:'http://images.amazon.com/images/P/0671010115.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/0671010115.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/0671010115.01.LZZZZZZZ.jpg'},
      {id:2,isbn:'1558743669',booktitle:'A Child Called It: One Child\'s Courage to Survive',bookauthor:'Dave Pelzer',yearofpublication:1995,publisher:'Health Communications',imageurls:'http://images.amazon.com/images/P/1558743669.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/1558743669.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/1558743669.01.LZZZZZZZ.jpg'},
      {id:3,isbn:'0140442073',booktitle:'The Twilight of the Idols (Classics S.)',bookauthor:'Friedrich Nietzsche',yearofpublication:1969,publisher:'Penguin Books Ltd',imageurls:'http://images.amazon.com/images/P/0140442073.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/0140442073.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/0140442073.01.LZZZZZZZ.jpg'},
      {id:4,isbn:'9531530319',booktitle:'Gdje pijevac ne pjeva (Biblioteka Zlatni paun)',bookauthor:'Ivan Aralica',yearofpublication:1996,publisher:'Otokar Kersovani',imageurls:'http://images.amazon.com/images/P/9531530319.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/9531530319.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/9531530319.01.LZZZZZZZ.jpg'},
      {id:5,isbn:'0735201994',booktitle:'Peterman Rides Again: Adventures Continue with the Real J. Peterman Through Life and the Catalog Business',bookauthor:'John Peterman',yearofpublication:2000,publisher:'Prentice Hall Art',imageurls:'http://images.amazon.com/images/P/0735201994.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/0735201994.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/0735201994.01.LZZZZZZZ.jpg'},
      {id:6,isbn:'0805059555',booktitle:'O Is for Outlaw',bookauthor:'Sue Grafton',yearofpublication:1999,publisher:'Henry Holt and Company',imageurls:'http://images.amazon.com/images/P/0805059555.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/0805059555.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/0805059555.01.LZZZZZZZ.jpg'},
      {id:7,isbn:'0854963782',booktitle:'The Silence of the Sea/Le Silence De LA Mer: A Novel of French Resistance During the Second World War by Vecors',bookauthor:'Lawrence Stokes',yearofpublication:1992,publisher:'Berg Publishers',imageurls:'http://images.amazon.com/images/P/0854963782.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/0854963782.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/0854963782.01.LZZZZZZZ.jpg'},
      {id:8,isbn:'0671884298',booktitle:'A LITTLE YELLOW DOG : Featuring an Original Easy Rawlins Short Story Gray-Eyed Death (Easy Rawlins Mysteries (Paperback))',bookauthor:'Walter Mosley',yearofpublication:1997,publisher:'Pocket',imageurls:'http://images.amazon.com/images/P/0671884298.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/0671884298.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/0671884298.01.LZZZZZZZ.jpg'},
      {id:9,isbn:'1852278951',booktitle:'Treasure Island: According to Spike Milligan',bookauthor:'Spike Milligan',yearofpublication:2000,publisher:'Virgin Books',imageurls:'http://images.amazon.com/images/P/1852278951.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/1852278951.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/1852278951.01.LZZZZZZZ.jpg'},
      {id:10,isbn:'0590250841',booktitle:'Tales from the Cryptkeeper #2: Hyde and Go Shriek and Hunted (Tales from the Cryptkeeper)',bookauthor:'Jane B. Mason',yearofpublication:1995,publisher:'Cartwheel Books (Scholastics)',imageurls:'http://images.amazon.com/images/P/0590250841.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/0590250841.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/0590250841.01.LZZZZZZZ.jpg'},
      {id:11,isbn:'051720679X',booktitle:'Three Complete Novels: A Is for Alibi / B Is for Burglar / C Is for Corpse',bookauthor:'Sue Grafton',yearofpublication:1999,publisher:'Wings',imageurls:'http://images.amazon.com/images/P/051720679X.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/051720679X.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/051720679X.01.LZZZZZZZ.jpg'},
      {id:12,isbn:'068985918X',booktitle:'Once More, With Feeling : The Script Book	Not Applicable',bookauthor:'(Na )',yearofpublication:2002,publisher:'Simon Spotlight Entertainment',imageurls:'http://images.amazon.com/images/P/068985918X.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/068985918X.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/068985918X.01.LZZZZZZZ.jpg'},
      {id:13,isbn:'1893121119',booktitle:'Ticket to Everywhere : The Best of Detours Travel Column',bookauthor:'Dave Hoekstra',yearofpublication:2000,publisher:'Lake Claremont Press',imageurls:'http://images.amazon.com/images/P/1893121119.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/1893121119.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/1893121119.01.LZZZZZZZ.jpg'},
      {id:14,isbn:'1857821173',booktitle:'Secrets of The Street: My Life as Ivy Tilsley',bookauthor:'Lynne Perrie',yearofpublication:1995,publisher:'Blake Publishing Ltd',imageurls:'http://images.amazon.com/images/P/1857821173.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/1857821173.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/1857821173.01.LZZZZZZZ.jpg'},
      {id:15,isbn:'1852838892',booktitle:'Thirty Years of NME Album Charts',bookauthor:'Roger Osborne',yearofpublication:1993,publisher:'Pan Macmillan',imageurls:'http://images.amazon.com/images/P/1852838892.01.THUMBZZZ.jpg',imageurlm:'http://images.amazon.com/images/P/1852838892.01.MZZZZZZZ.jpg',imageurll:'http://images.amazon.com/images/P/1852838892.01.LZZZZZZZ.jpg'},

  ];

  selectedBook: Book | undefined;

  onAdded(book:Book){
    alert(`Title: ${book.booktitle} added to the cart!`);
  }
}
