import { Injectable } from '@angular/core';
import { Book } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [ { Id: 1, Name: "Core Java", Author: "author", Edition: 1, Publisher: "xyz company" },
  { Id: 2, Name: "Angular", Author: "Angular.io", Edition: 2, Publisher: "asd" },
  { Id: 3, Name: "Hibernate", Author: "zxc", Edition: 2, Publisher: "Books" },
  { Id: 4, Name: "TypeScript", Author: "me", Edition: 1, Publisher: "vfr" }];

  getBooks(): Book[] {
    return this.books;
  }

  addBook(book: Book): void {
    this.books.push(book);
  }
  getBookById(Id: number): any {
    return this.books.find(book => book.Id === Id);
  }
  deleteBookById(Id: number): void {
    const index = this.books.findIndex(book => book.Id === Id);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
