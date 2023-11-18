import { createContext, useEffect, useState } from "react";
import {
  AtributoBook,
  Book,
  BookStatus,
  Efecto,
  Library,
  Review,
} from "./helpers/interfaces/types";
import { getRating } from "@/context/helpers/services/book/rating.js";
import { getReviews } from "@/context/helpers/services/review/getReviews";
import { guardarStore } from "./helpers/localStore/store/guardarStore.js";
import { conseguirStore } from "./helpers/localStore/store/conseguirStore.js";
import { guardarUser } from "./helpers/localStore/user/guardarUser.js";
import { conseguirUser } from "./helpers/localStore/user/conseguirUser.js";
import { guardarListaFiltrada } from "./helpers/localStore/filters/guardarListaFiltrada.js";
import { conseguirListaFiltrada } from "./helpers/localStore/filters/conseguirListaFiltrada.js";
import { guardarEfecto } from "./helpers/localStore/effect/guardarEfecto.js";
import { guardarCheked } from "./helpers/localStore/checked/guardarCheked.js";
import books from "@/data/books.json";
import { useRouter } from "next/router";
import { initialStateEfecto } from "@/context/helpers/store/initialStateEfecto";

const LibraryContext = createContext({});

function LibraryProvider({ children }: { children: React.ReactNode }) {
  const [library, setLibrary] = useState<Library>({ books: [] });
  const [userAuth, setUserAuth] = useState<null | string>(null);
  const [cargando, setCargando] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState<Library>({
    books: [],
  });
  const [classes, setClasses] = useState<Efecto>(initialStateEfecto);
  const [isChecked, setIsChecked] = useState(false);

  const router = useRouter();

  function changeChecked(valor: boolean) {
    setIsChecked(valor);
  }
  function getChecked() {
    return isChecked;
  }

  function changeClasses(clases: Efecto) {
    setClasses(clases);
  }
  function getClasses() {
    return classes;
  }

  function getfilteredBooks() {
    return filteredBooks;
  }

  function changeFilteredBooks(library: Library) {
    setFilteredBooks(library);
  }

  function resetFilteredBooks() {
    changeFilteredBooks(getLibrary());
  }

  function getFueraDeBiblioteca() {
    const data = getLibrary().books.filter(
      (item) => item.status === BookStatus.NOT_READ
    );
    changeFilteredBooks({ books: data });
  }

  function cargarLista() {
    const libraryData = books.library;
    Promise.all(
      libraryData.map(({ book }) => {
        return getRating(book.ISBN).then((rating) => {
          const newBook: Book = {
            status: BookStatus.NOT_READ,
            book,
            rating,
            reviews: [],
            stock: 10,
          };
          return newBook;
        });
      })
    ).then((booksWithRatings) => {
      const initialLibrary: Library = {
        books: booksWithRatings,
      };
      setLibrary(initialLibrary);
    });
  }

  function changeLibrary(library: Library) {
    setLibrary(library);
  }

  function changeRoute(ruta: string) {
    router.push(ruta);
  }

  function getLibrary() {
    return library;
  }

  function searchBookForISBN(ISBN: string) {
    return getLibrary().books.find((item) => item.book.ISBN === ISBN);
  }

  function changeStatusBook(newStatus: BookStatus, ISBN: string) {
    setLibrary((prevLibrary) => {
      const updatedBooks = prevLibrary.books.map((item) => {
        if (item.book.ISBN === ISBN) {
          return { ...item, status: newStatus };
        }
        return item;
      });

      return { ...prevLibrary, books: updatedBooks };
    });
  }

  function getAllMyBooks() {
    return getLibrary().books.filter(
      (item) => item.status !== BookStatus.NOT_READ
    );
  }

  function getBooksNoRead() {
    return getLibrary().books.filter(
      (item) => item.status === BookStatus.NOT_READ
    );
  }

  function getMyBooksFilter(status: BookStatus) {
    return getLibrary().books.filter((item) => item.status === status);
  }

  async function getReviewsOfBook(ISBN: string) {
    const { respuesta, contador, listaDeReviews } = await getReviews(ISBN);

    if (respuesta === "success") {
      const booksWithRatings = getLibrary().books.map((item) => {
        if (item.book.ISBN === ISBN) {
          item.reviews = listaDeReviews;
        }
        return item;
      });
      setLibrary({ books: booksWithRatings });
    }

    return { listaDeReviews, contador };
  }

  function getListBooksFilter(): Library {
    return filteredBooks;
  }

  function getUserAuth() {
    return userAuth;
  }

  function loginUser(user: string) {
    setUserAuth(user);
  }

  function getCargando() {
    return cargando;
  }

  function changeCargando(state: boolean) {
    setCargando(state);
  }

  async function addReviewToBook(ISBN: string, review: Review) {
    const updatedBooks = getLibrary().books.map((item) => {
      if (
        item.book.ISBN === ISBN &&
        !item.reviews.find((r) => r.user === review.user)
      ) {
        item.reviews.push(review);
      }
      return item;
    });

    // Obtener el rating actualizado después de agregar la reseña
    const updatedRatings = await Promise.all(
      updatedBooks.map(async (item) => {
        const rating = await getRating(item.book.ISBN);
        return { ...item, rating };
      })
    );

    setLibrary({ books: updatedRatings });
  }

  function existReviewUser(ISBN: string) {
    const book = getLibrary().books.find((item) => item.book.ISBN === ISBN);

    if (book) {
      const reviewExists = book.reviews.some((r) => r.user === getUserAuth());
      return reviewExists;
    }

    return false;
  }

  function getReviewUser(ISBN: string) {
    const book = getLibrary().books.find((item) => item.book.ISBN === ISBN);

    if (book) {
      const reviewExists = book.reviews.find((r) => r.user === getUserAuth());

      return reviewExists;
    }

    return null;
  }

  function getBooksFilter(searchText: string, atributo: AtributoBook) {
    const filteredBooks = getLibrary().books.filter((item) => {
      const attributeValue =
        atributo === AtributoBook.AUTHOR
          ? item.book.author.name
          : (item.book[atributo] as string);

      return attributeValue.toLowerCase().includes(searchText.toLowerCase());
    });

    return { books: filteredBooks };
  }

  function getMyLibraryFilter(searchText: string, atributo: AtributoBook) {
    const filteredBooks = getLibrary().books.filter((item) => {
      if (item.status === BookStatus.NOT_READ) return;
      const attributeValue =
        atributo === AtributoBook.AUTHOR
          ? item.book.author.name
          : (item.book[atributo] as string);

      return attributeValue.toLowerCase().includes(searchText.toLowerCase());
    });

    return { books: filteredBooks };
  }

  function countUniqueGenres() {
    try {
      const genresSet = new Set();
      books.library.forEach((item: any) => {
        const genre = item.book.genre;
        genresSet.add(genre);
      });
      return genresSet.size;
    } catch (error) {
      console.error("Error al procesar el JSON:", error);
      return 0;
    }
  }

  function getLibrosGeneros() {
    return `Explora nuestra biblioteca virtual con ${
      books.library.length
    } libros y ${countUniqueGenres()} géneros.`;
  }

  function getDashboardBiblioteca() {
    const books = getLibrary().books;
    const totalRead = books.filter(
      (item) => item.status === BookStatus.READ
    ).length;
    const totalReading = books.filter(
      (item) => item.status === BookStatus.READING
    ).length;
    const totalLibrary = books.filter(
      (item) => item.status === BookStatus.IN_LIBRARY
    ).length;

    return {
      totalRead,
      totalReading,
      totalLibrary,
    };
  }

  useEffect(() => {
    let data = conseguirStore();

    if (data == null || (data.books && data.books.length === 0)) {
      cargarLista();
    } else {
      setLibrary(data);
    }

    let listaFiltrada = conseguirListaFiltrada();

    if (listaFiltrada != null) {
      changeFilteredBooks(listaFiltrada);
    }

    const dataUser = conseguirUser();
    if (dataUser != null) {
      setUserAuth(dataUser);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "books") {
        const newState = JSON.parse(event.newValue || "{}");
        setLibrary(newState);
      }
      if (event.key === "booksFilters") {
        const newState = JSON.parse(event.newValue || "{}");
        changeFilteredBooks(newState);
      }
      if (event.key === "cheked") {
        const newState = JSON.parse(event.newValue || "{}");
        changeChecked(newState);
      }
      if (event.key === "efecto") {
        const newState = JSON.parse(event.newValue || "{}");
        changeClasses(newState);
      }
      if (event.key === "userData") {
        const newState = JSON.parse(event.newValue || "{}");
        setUserAuth(newState);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    if (getLibrary().books.length !== 0) {
      guardarStore(getLibrary());
      changeFilteredBooks(getLibrary());
    }
  }, [library]);

  useEffect(() => {
    guardarEfecto(getClasses());
  }, [classes]);

  useEffect(() => {
    guardarListaFiltrada(getListBooksFilter());
  }, [filteredBooks]);

  useEffect(() => {
    guardarUser(getUserAuth());
  }, [userAuth]);

  useEffect(() => {
    guardarCheked(getChecked());
  }, [isChecked]);

  return (
    <LibraryContext.Provider
      value={{
        library,
        getLibrary,
        changeStatusBook,
        getAllMyBooks,
        getMyBooksFilter,
        getReviewsOfBook,
        changeCargando,
        loginUser,
        getCargando,
        changeRoute,
        searchBookForISBN,
        getUserAuth,
        addReviewToBook,
        existReviewUser,
        getReviewUser,
        getBooksFilter,
        changeLibrary,
        filteredBooks,
        getfilteredBooks,
        changeFilteredBooks,
        resetFilteredBooks,
        getBooksNoRead,
        getLibrosGeneros,
        classes,
        changeClasses,
        getClasses,
        getFueraDeBiblioteca,
        isChecked,
        getChecked,
        changeChecked,
        getDashboardBiblioteca,
        getMyLibraryFilter,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export { LibraryProvider };
export default LibraryContext;
