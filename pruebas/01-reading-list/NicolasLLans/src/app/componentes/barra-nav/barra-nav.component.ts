import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-barra-nav',
  templateUrl: './barra-nav.component.html',
  styleUrls: ['./barra-nav.component.css']
})
export class BarraNavComponent implements OnInit {

  activo:boolean = this.generalService.activo;
  misBooks: any[] = [];
  constructor(public generalService:GeneralService) {}

  ngOnInit(): void {
    this.misBooks = this.generalService.getLocalStorageBooks();
    this.generalService.books$.subscribe((books: any[]) => {
      this.misBooks = books;
    });
  }

  onActive(){
    this.activo=!this.activo;
  }

  verMiLista(){
    this.generalService.miLista=!this.generalService.miLista;
  }

}
