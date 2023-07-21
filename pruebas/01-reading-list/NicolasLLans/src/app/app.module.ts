import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';
import { MainComponent } from './componentes/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { MilistaComponent } from './componentes/milista/milista.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavComponent,
    MainComponent,
    FooterComponent,
    MilistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
