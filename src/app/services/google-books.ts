import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable()
export class GoogleBooksService {
    private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private http: Http) {}

    searchBooks(queryTitle: string): Observable<Book[]> {
        return this.http.get(`${this.API_PATH}?q=${queryTitle}`)
          .pipe(map(res => res.json().items || []));
      }
    
      retrieveBook(volumeId: string): Observable<Book> {
        return this.http.get(`${this.API_PATH}/${volumeId}`)
          .pipe(map(res => res.json()));
    }
}