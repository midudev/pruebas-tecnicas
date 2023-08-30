// Creación de un array de géneros únicos a partir de allBooks.
export const useUniqueGenre = (allBooks) => {
  const uniqueGenres = [...new Set(allBooks.map((res) => res.book.genre))];

  if (!uniqueGenres.includes("Todos")) {
    uniqueGenres.unshift("Todos");
  }
  return uniqueGenres;
};
