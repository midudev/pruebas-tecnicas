import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  maxPages: number = 1300;
  selectedGenre: string | null = null;
  books: any = [];
  genres: string[] = [];
  misBooks: any[] = [];

  constructor(public generalService: GeneralService) {

    // Agregar el event listener para el evento 'storage'
    window.addEventListener('storage', (event) => {
      if (event.key === 'books') {
        // Se produjo un cambio en el 'localStorage' desde otra pestaña
        // Obtener los datos actualizados del 'localStorage' y actualizar 'misBooks'
        const localStorageBooks = window.localStorage.getItem('books');
        if (localStorageBooks) {
          this.misBooks = JSON.parse(localStorageBooks);
        }
      }
    });
    
  }

  ngOnInit(): void {
    this.getLibrary();
  }

  ngOnDestroy(): void {

  }

  getLibrary(): void {
    this.generalService.getbooks().subscribe(
      (res: any) => {
        if (res && res.library) {
          this.books = res;
          this.genres = this.getGenres();
          console.log(res);
        } else {
          console.error('Respuesta inválida del servicio', res);
        }
      },
      (error: any) => {
        console.error('Error al cargar los datos de los libros', error);
      }
    );
  }

  getGenres(): string[] {
    const genresSet = new Set<string>();
    this.books.library.forEach((item: any) => {
      genresSet.add(item.book.genre);
    });
    return Array.from(genresSet);
  }

  get filteredBooks() {
    if (this.books.library) {
      if (this.selectedGenre === null || this.selectedGenre === '') {
        return this.books.library.filter((item: { book: { pages: number } }) => item.book.pages < this.maxPages);
      } else {
        return this.books.library.filter((item: { book: { pages: number; genre: string } }) => item.book.pages < this.maxPages && item.book.genre === this.selectedGenre);
      }
    }
  }

  selectBook(item: any) {
    // Obtener la lista existente del localStorage
    const storedList = window.localStorage.getItem('books');
    const existingList = storedList ? JSON.parse(storedList) : [];

    // Agregar el nuevo elemento a la lista existente
    existingList.push(item);

    // Actualizar el localStorage con la lista actualizada
    this.generalService.updateLocalStorageBooks(existingList);

    // Actualizar la lista local this.misBooks con la lista actualizada
    this.misBooks = existingList;

    this.generalService.nuevaLista.push(item);
    this.generalService.contador = true;
    this.generalService.miLista = true;
  }

}