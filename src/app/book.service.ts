import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_URL = 'http://localhost:3000/books';

  constructor(private httpClient: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL);
  }
  getBook(id: number): Observable<Book> {
      return this.httpClient.get<Book>(`${this.API_URL}/${id}`);

  }

  addBooks(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.API_URL, book);
  }
  deleteBooks(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${this.API_URL}/${id}`);
  }
  updateBooks(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.API_URL}/${book.id}`, book);
  }
}
