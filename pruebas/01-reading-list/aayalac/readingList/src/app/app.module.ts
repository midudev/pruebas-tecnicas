import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop'; // Asegúrate de importar el módulo aquí


import { AppComponent } from './app.component';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoLibrosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }