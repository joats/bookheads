import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Book } from '../../models/book.model';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private store: Store<AppState>) {
    this.books = store.select('book')
  }

  ngOnInit() {
  }

}
