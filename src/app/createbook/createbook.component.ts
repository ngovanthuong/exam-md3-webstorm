import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Book} from '../book';
import {BookService} from '../book.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.scss']
})
export class CreatebookComponent implements OnInit, OnDestroy {
  public subscription: Subscription;
  public book: Book;

  constructor(
    public bookService: BookService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.book = new Book();
    }
  onAddBook() {
    this.subscription = this.bookService.addBooks(this.book).subscribe(data => {
      if (data && data.id) {
        this.routerService.navigate(['book']);
      }
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

