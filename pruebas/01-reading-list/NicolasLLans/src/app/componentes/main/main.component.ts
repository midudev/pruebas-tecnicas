import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';
import { Book } from 'src/app/modelos/books';

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
  bookSelect: boolean = false;
  misBooks: any[] = [];
  activo: boolean = this.generalService.activo;
  bookSeleccionado: Book | null = null;


  constructor(public generalService: GeneralService) { }

  ngOnInit(): void {
    this.getLibrary();
    this.refreshLocalstorage();
  }

  verMiLista() {
    this.generalService.miLista = !this.generalService.miLista;
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

  refreshLocalstorage() {
    const localStorageBooks = window.localStorage.getItem('books');
    if (localStorageBooks) {
      this.misBooks = JSON.parse(localStorageBooks);
      this.generalService.contador = true;
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

    // Resto del código...
    this.generalService.nuevaLista.push(item);
    this.generalService.contador = true;
    this.generalService.miLista = true;
    this.refreshLocalstorage();
  }

  quitarBook(title: string) {
    const localStorageBooks = window.localStorage.getItem('books');
    if (localStorageBooks) {
      const books = JSON.parse(localStorageBooks);
      const updatedBooks = books.filter((item: any) => item.book.title !== title);
      window.localStorage.setItem('books', JSON.stringify(updatedBooks));
      this.refreshLocalstorage();
      this.generalService.updateLocalStorageBooks(updatedBooks);
    }
  }

  // ... (resto de tu código)

  findBookInLocalStorage(title: string): any | null {
    const localStorageBooks = window.localStorage.getItem('books');
    if (localStorageBooks) {
      const books = JSON.parse(localStorageBooks);
      const bookSeleccionado = books.find((item: any) => item.book.title === title);
      return bookSeleccionado ? bookSeleccionado.book : null;
    }
    return null;
  }

  BookInfo(title: string) {
    this.generalService.milibro = true;
    if (title) {
      const bookSeleccionadoFromLocalStorage = this.findBookInLocalStorage(title);
      if (bookSeleccionadoFromLocalStorage) {
        this.bookSeleccionado = bookSeleccionadoFromLocalStorage;
        console.log(this.bookSeleccionado);
      } else {
        const bookSeleccionadoFromLibrary = this.books.library.find((item: any) => item.book.title === title);
        if (bookSeleccionadoFromLibrary) {
          this.bookSeleccionado = bookSeleccionadoFromLibrary.book;
          console.log(this.bookSeleccionado);
        } else {
          console.log('Libro no encontrado');
        }
      }
    }
  }

  // ... (resto de tu código)

  cerrarMiLibro() {
    this.generalService.milibro = false;
  }

}