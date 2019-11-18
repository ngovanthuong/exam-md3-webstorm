import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.scss']
})
export class BooklistComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public book: Book[] = [];

  constructor(public bookService: BookService) { }

  ngOnInit() {
    this.subscription = this.bookService.getAllBooks().subscribe(data => {
      this.book = data;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  onDelete(id: number) {
    this.subscription = this.bookService.deleteBooks(id).subscribe((data: Book) => {
      this.updateData(id);
    });
  }
  updateData(id: number) {
    for (let i = 0; i < this.book.length ; i++) {
      if (this.book[i].id === id) {
        this.book.splice(i, 1);
        break;
      }
    }

  }
}
