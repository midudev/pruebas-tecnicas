import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoLibrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }