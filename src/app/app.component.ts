import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';
import { BooksService } from './books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public authorInfo = {} as any;

  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.getAuthorInfo();
  }

  async getAuthorInfo() {
    const authorInfo$ = this.booksService.getAuthorInfo();
    let result: any = await lastValueFrom(authorInfo$);
    this.authorInfo = result?.data;
  }
}
