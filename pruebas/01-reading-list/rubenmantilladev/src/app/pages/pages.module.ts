import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page/search-page.component';
import { OneBookPageComponent } from './one-book-page/one-book-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchPageComponent, OneBookPageComponent],
  imports: [
    CommonModule, SharedModule
  ], exports: [SearchPageComponent, OneBookPageComponent]
})
export class PagesModule { }
