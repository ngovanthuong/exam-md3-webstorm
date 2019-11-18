import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreatebookComponent} from './createbook/createbook.component';
import { EditbookComponent } from './editbook/editbook.component';

const routes: Routes = [
  {
    path: '', component: BooklistComponent
  },
  {
    path: 'books/add',
    component: CreatebookComponent
  },
  {
    path: 'books/:id/edit',
   component: EditbookComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    CreatebookComponent,
    EditbookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
