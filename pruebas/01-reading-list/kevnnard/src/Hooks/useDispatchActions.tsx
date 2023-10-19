import { BookProps, FeaturedInterface } from "@/interfaces/Book.interface";
import { dispatch } from "@/store";
import {
  addBookToRead,
  changePriorityBookToRead,
  getOneBookByISBN,
  removeBookFromRead,
  searchBooksFilterByGender,
  searchBooksFilterByPages,
  searchBooksFilterByTitle,
  sortBooksToReadByPriority,
} from "@/store/slices/books";
import { openSnackbar } from "@/store/slices/snackbar";

export const useDispatchActions = () => {
  // FUNCION PARA OBTENER INFORMACION DE UN LIBRO POR SU ID UNICO "ISBN"
  const handleGetOneBook = (ISBN: FeaturedInterface) => {
    dispatch(getOneBookByISBN(ISBN));
  };

  // FUNCION PARA AÑADIR UN LIIBRO A LA LISTA LIBROS POR LEER
  const handleAddBookToRead = (item: BookProps) => {
    dispatch(addBookToRead(item));
    dispatch(
      openSnackbar({
        open: true,
        message: "Añadido a Libros por Leer",
        alert: {
          color: "success",
        },
        close: false,
      })
    );
  };

  // FUNCION PARA REMOVER UN LIBRO DE LA LISTA LIBROS POR LEER
  const handleRemoveBook = (item: BookProps) => {
    dispatch(removeBookFromRead(item));
    dispatch(
      openSnackbar({
        open: true,
        message: "Eliminado de Libros por Leer",
        alert: {
          color: "error",
        },
        close: false,
      })
    );
  };

  // FUNCION PARA REALIZAR BUSQUEDA DE LIBROS POR GENERO
  const handleSearchByGenre = (genderFilter: string) => {
    dispatch(searchBooksFilterByGender(genderFilter));
  };

  // FUNCION PARA REALIZAR BUSQUEDA DE LIBROS POR PAGINAS DEL LIBRO
  const handleSearchByPages = (pagesFilter: number) => {
    dispatch(searchBooksFilterByPages(pagesFilter));
  };

  // FUNCION PARA REALIZAR BUSQUEDA DE LIBROS POR TITULO
  const handleSearchByTitle = (titleFilter: string) => {
    dispatch(searchBooksFilterByTitle(titleFilter));
  };

  // FUNCION PARA ASIGNAR PRIORIDAD 1 A 3
  const handleChangePriorityBook = ({
    book,
    index,
  }: {
    book: BookProps;
    index: number;
  }) => {
    dispatch(changePriorityBookToRead({ book, index }));
  };

  // FUNCION PARA ORDENAR LISTA DE LIBROS POR PRIORIDAD
  const handleSortPriorityBooksToRead = (sort: string) => {
    dispatch(sortBooksToReadByPriority({ sort }));
  };
  return {
    handleGetOneBook,
    handleAddBookToRead,
    handleRemoveBook,
    handleSearchByGenre,
    handleSearchByPages,
    handleSearchByTitle,
    handleChangePriorityBook,
    handleSortPriorityBooksToRead,
  };
};
