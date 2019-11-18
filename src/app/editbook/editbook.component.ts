import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.scss']
})
export class EditbookComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public book: Book;
  public subscriptionParam: Subscription;

  constructor(
    public bookService: BookService,
    public routerService: Router,
    public activateRouteService: ActivatedRoute
  ) { }
  ngOnInit() {
    this.book = new Book();
    this.loadData();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParam) {
      this.subscriptionParam.unsubscribe();
    }
  }
  onEditBook() {
    this.subscription = this.bookService.updateBooks(this.book).subscribe((data: Book) => {
      this.routerService.navigateByUrl('');
    } );
  }
  loadData() {
    this.subscriptionParam = this.activateRouteService.params.subscribe((data: Params) => {
      this.subscription = this.bookService.getBook(data.id).subscribe((book: Book) => {
        this.book = book;

      });
    });
  }

}
