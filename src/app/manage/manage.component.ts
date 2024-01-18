import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { AppComponent, Book } from '../app.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage',
  standalone: true,
  imports: [AppComponent, CommonModule, FormsModule],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  constructor(public bookService:BookService){}
  show:boolean = true;
  book: Book = {Id:0,Name:'',Author:'',Edition:0,Publisher:''};
  editbook(Id:number):void{
    this.book = this.bookService.getBookById(Id);
    this.bookService.deleteBookById(Id);
    this.show=!this.show;
  }
  update(form:NgForm){
    this.bookService.addBook(this.book);
    this.show=!this.show;
    alert("Book updated")
    this.book= {Id:0,Name:'',Author:'',Edition:0,Publisher:''};
  }
}
