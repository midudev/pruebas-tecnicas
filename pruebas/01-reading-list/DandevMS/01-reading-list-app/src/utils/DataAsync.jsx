import { useState, useEffect } from "react";
import data from "../../data/books.json";
import { BiBookAdd } from "react-icons/bi";

function CardsBook() {
  const [library, setLibrary] = useState(data.library);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [readingListCount, setReadingListCount] = useState(0);
  const [availableBooksCount, setAvailableBooksCount] = useState(0);

  // Actualizar los recuentos de libros en la lista de lectura y disponibles
  useEffect(() => {
    const readingList = library.filter((book) => book.readingList);
    setReadingListCount(readingList.length);
    setAvailableBooksCount(library.length - readingList.length);
  }, [library]);

  // Filtrar libros por género
  const filterBooksByGenre = (genre) => {
    const filteredBooks = data.library.filter(
      (book) => book.book.genre === genre
    );
    setLibrary(filteredBooks);
  };

  // Restaurar la lista de libros original
  const resetFilter = () => {
    setLibrary(data.library);
    setSelectedGenre("");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Listado de Libros
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="flex justify-end mb-4">
          <select
            value={selectedGenre}
            onChange={(e) => {
              const genre = e.target.value;
              setSelectedGenre(genre);
              if (genre) {
                filterBooksByGenre(genre);
              } else {
                resetFilter();
              }
            }}
            className="p-2 border rounded-md"
          >
            <option value="">Todos los géneros</option>
            <option value="Ficción">Ficción</option>
            <option value="No ficción">No ficción</option>
            <option value="Fantasía">Fantasía</option>
            {/* Agrega más opciones de género según tus datos */}
          </select>
        </div>

        {library.map((book, index) => (
          // Resto del código del componente
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <p>
            Número de libros en la lista de lectura: {readingListCount}
          </p>
          <p>Número de libros disponibles: {availableBooksCount}</p>
        </div>
        {/* Otro contenido relacionado con el componente CardsBook */}
      </div>
    </div>
  );
}

export default CardsBook;
