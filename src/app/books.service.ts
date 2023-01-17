import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private url = 'https://s3.amazonaws.com/api-fun/books.json';

  constructor(private httpClient: HttpClient) {}

  getAuthorInfo() {
    return this.httpClient.get(this.url);
  }
}
