import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { CopyrightDirective } from './directives/copyright.directive';
import { Observable } from 'rxjs';
import { APP_SETTINGS } from './app.settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookListComponent, CopyrightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  setting = inject(APP_SETTINGS);
  user = 'Tem';
  subtitle = 'Books List';
  source='Amazon books and ratings from kaggle';
  // current_time: string | undefined;

  current_time=signal(new Date());


  constructor(){
    // this.current_time$.subscribe(this.setTimestamp);
    this.current_time.set(new Date());
  }

  // private setTimestamp=()=>{
  //   this.current_time = new Date().toString();
  // }

  // current_time$ = new Observable(observer=>{
  //   setInterval(()=>{
  //     observer.next(new Date());
  //   },1000)
  // })
}
