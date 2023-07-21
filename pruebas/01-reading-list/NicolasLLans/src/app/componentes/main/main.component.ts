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

  quitarBook(title: string) {
    const localStorageBooks = window.localStorage.getItem('books');
    if (localStorageBooks) {
      const books = JSON.parse(localStorageBooks);
      const updatedBooks = books.filter((item: any) => item.book.title !== title);
      window.localStorage.setItem('books', JSON.stringify(updatedBooks));

      // Actualizar la lista local this.misBooks con la lista actualizada
      this.misBooks = updatedBooks;

      this.generalService.updateLocalStorageBooks(updatedBooks);
    }
  }


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


  cerrarMiLibro() {
    this.generalService.milibro = false;
  }


}