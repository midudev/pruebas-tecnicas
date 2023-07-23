import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/general.service';
import { Book } from 'src/app/modelos/books';

@Component({
  selector: 'app-milista',
  templateUrl: './milista.component.html',
  styleUrls: ['./milista.component.css']
})
export class MilistaComponent implements OnInit {

  books: any = [];
  misBooks: any[] = [];
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
    this.misBooks = this.generalService.getLocalStorageBooks();
    this.generalService.books$.subscribe((books: any[]) => {
      this.misBooks = books;
    });
  }

  verMiLista() {
    this.generalService.miLista = !this.generalService.miLista;
  }

  quitarBook(title: string) {
    const localStorageBooks = window.localStorage.getItem('books');
    
    if (localStorageBooks) {
      const books = JSON.parse(localStorageBooks);
      const updatedBooks = books.filter((item: any) => item.book.title !== title);
  
      if (updatedBooks.length === 0) {
        this.generalService.vacio = true;
      } else {
        this.generalService.vacio = false;
      }
  
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
