import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-catalogo-libros',
  templateUrl: './catalogo-libros.component.html',
  styleUrls: ['./catalogo-libros.component.css']
})
export class CatalogoLibrosComponent implements OnInit {
  libros: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/data/libros.json')
      .subscribe(data => this.libros = data.library);
  }
}