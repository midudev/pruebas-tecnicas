import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { AppComponent } from './app.component';
import { CatalogoLibrosComponent } from './catalogo-libros/catalogo-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoLibrosComponent,    
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }