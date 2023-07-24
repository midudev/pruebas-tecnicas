import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Library } from 'src/app/models/data-from-api.interface';
import { BooksService } from 'src/app/services/books.service';
import { AvailableBooksTableComponent } from 'src/app/components/available-books-table/available-books-table.component';
import { Genre } from '../../models/data-from-api.interface';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Observable, combineLatest, map, tap } from 'rxjs';

@Component({
  selector: 'book-available-books',
  standalone: true,
  imports: [
    CommonModule,
    AvailableBooksTableComponent,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.scss'],
})
export class AvailableBooksComponent implements OnInit {
  public availableBooks!: Library[];
  public selected: Genre = 'Todos'; // Variable para almacenar el género seleccionado

  booksService = inject(BooksService);

  ngOnInit(): void {
    this.booksService.getAvailable().subscribe({
      next: (library: Library[]) => {
        this.availableBooks = library;
      },
    });
  }

  // Función que se ejecuta cuando cambia la selección en el <mat-select>
  // filterByGenre(selectedGenre: Genre): void {
  //   this.selected = selectedGenre; // Actualiza el género seleccionado
  // }

  // // Observable que combina availableBooks$ y selected para obtener los libros filtrados
  // get filteredBooks$(): Observable<Library[]> {
  //   return combineLatest([this.availableBooks, this.selected]).pipe(
  //     map(([libraries, selectedGenre]) => {
  //       if (selectedGenre === 'Todos') {
  //         // Si se selecciona 'Todos', devolvemos todos los libros sin filtrar
  //         return libraries;
  //       } else {
  //         // Filtrar los libros por el género seleccionado
  //         return libraries.filter((library: Library) => {
  //           return library.book.genre === selectedGenre;
  //         });
  //       }
  //     })
  //   );
  // }
}
