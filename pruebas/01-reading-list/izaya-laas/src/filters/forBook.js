const booksPerf = books.map(({ book: bookData }) => bookData);
booksPerf.filter((book) => book.title.toLowerCase().includes('lo'));
booksPerf.filter((book) => book.genre.toLowerCase() === 'terror');
