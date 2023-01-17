import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  @Input() authorInfo = {} as any;

  public book = {
    title: '',
    PublishDate: '',
    purchaseLink: '',
    imageUrl: '',
  };
  public currentIndex: any;
  public showEdit = false;

  public booksImageListArr = [
    '../../assets/images/sample-image.png',
    '../../assets/images/sample-image-1.png',
    '../../assets/images/sample-image-2.png',
  ];

  getSortedOption(event: any) {
    if (event.target.value === 'title') {
      this.sortByTitle();
    } else if (event.target.value === 'date') {
      this.sortByDate();
    }
  }

  sortByTitle() {
    this.authorInfo?.books?.sort((a: any, b: any) =>
      a.title > b.title ? 1 : -1
    );
  }

  sortByDate() {
    this.authorInfo?.books?.sort((a: any, b: any) =>
      a.PublishDate > b.PublishDate ? 1 : -1
    );
  }

  submitBook() {
    if (this.currentIndex > -1 && this.currentIndex !== null) {
      this.updateEditBook();
    } else {
      this.authorInfo?.books.push({
        title: this.book.title,
        PublishDate: this.book.PublishDate,
        purchaseLink:
          'https://www.amazon.com/BFG-Roald-Dahl/dp/0142410381/ref=sr_1_3?ie=UTF8&qid=1501899423&sr=8-3&keywords=roald+dahl',
        imageUrl:
          this.booksImageListArr[
            Math.floor(Math.random() * this.booksImageListArr.length)
          ],
      });
    }
    this.clearForm();
  }

  clearForm() {
    this.book = {
      title: '',
      PublishDate: '',
      purchaseLink: '',
      imageUrl: '',
    };
  }

  showHideForm() {
    this.showEdit = !this.showEdit;
  }

  editBook(index: number) {
    this.book = this.authorInfo.books[index];
    this.currentIndex = index;
    this.showEdit = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  updateEditBook() {
    this.authorInfo.books[this.currentIndex] = this.book;
    this.currentIndex = null;
  }

  deleteBook(index: number) {
    this.authorInfo.books.splice(index, 1);
  }
}
