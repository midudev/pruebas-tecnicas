import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-catalogo-libros',
  templateUrl: './catalogo-libros.component.html',
  styleUrls: ['./catalogo-libros.component.css']
})
export class CatalogoLibrosComponent implements OnInit {
  libros: any[] = [];
  listaDeLectura: any[] = [];
  filtroTitulo = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/data/libros.json')
      .subscribe(data => this.libros = data.library);
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  moverALectura(libro: any) {
    const index = this.libros.indexOf(libro);
    if (index !== -1) {
      this.listaDeLectura.push(libro);
      this.libros.splice(index, 1);
    }
  }

  moverACatalogo(libro: any) {
    const index = this.listaDeLectura.indexOf(libro);
    if (index !== -1) {
      this.libros.push(libro);
      this.listaDeLectura.splice(index, 1);
    }
  }
}
