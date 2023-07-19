import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { FilterNumberPagesComponent } from './filter-number-pages/filter-number-pages.component';
import { FilterGenderComponent } from './filter-gender/filter-gender.component';
import { ListReadingComponent } from './list-reading/list-reading.component';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    FilterNumberPagesComponent,
    FilterGenderComponent,
    ListReadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
