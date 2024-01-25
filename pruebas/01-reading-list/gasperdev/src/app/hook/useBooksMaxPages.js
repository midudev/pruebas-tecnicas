export const useBooksMaxPages = (allBooks) => {
  // Método para encontrar el libro con más páginas
  let maxPages = 0;
  if (Array.isArray(allBooks)) {
    allBooks.forEach((bookInfo) => {
      const currentPages = bookInfo.book.pages;
      if (currentPages > maxPages) {
        maxPages = currentPages;
      }
    });
  }
  return maxPages;
};
