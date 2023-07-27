import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneBookComponent } from './one-book/one-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReadingListComponent } from '../components/reading-list/reading-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';



@NgModule({
  declarations: [OneBookComponent, NavbarComponent, FooterComponent, ReadingListComponent, SearchBarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    OneBookComponent,
    NavbarComponent,
    FooterComponent,
    ReadingListComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
