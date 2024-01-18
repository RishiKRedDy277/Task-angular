import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AppComponent, Book } from '../app.component';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent,CommonModule,NgForOf,RouterLink,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public bookService:BookService){}
  show:boolean = true;
  book: Book = {Id:0,Name:'',Author:'',Edition:0,Publisher:''};
  viewbook(Id:number):void{
    this.book = this.bookService.getBookById(Id);
    this.show=!this.show;
  }
  back(){
    this.show=!this.show;
    this.book= {Id:0,Name:'',Author:'',Edition:0,Publisher:''};
  }
}
