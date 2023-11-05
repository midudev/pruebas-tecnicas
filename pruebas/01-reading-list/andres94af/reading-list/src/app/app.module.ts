import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './component/index/index.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListaLecturaComponent } from './component/lista-lectura/lista-lectura.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ListaLecturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
