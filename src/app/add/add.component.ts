import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../app.component';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(public bookService:BookService){}
  book: Book = {Id:0,Name:'',Author:'',Edition:0,Publisher:''};
  addbook(form:NgForm):void{
      this.bookService.addBook(this.book);
      alert("Book added");
      this.book={Id:0,Name:'',Author:'',Edition:0,Publisher:''}
  }
}
