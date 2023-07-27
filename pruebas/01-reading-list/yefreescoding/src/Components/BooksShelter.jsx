/* eslint-disable react/prop-types */

// import components
import Library from './Library';
import UserReadingList from './UserReadingList';

// import hooks
import { useState } from 'react';

// import functions
import { slugify, myBooksProps, BookCategories } from '../scripts/store';

export default function BooksShelter() {
  const [category, setCategory] = useState(myBooksProps);
  const [booksSelected, setBooksSelected] = useState([]);
  const [bookCounts, setBookCounts] = useState([]);

  const handleSelectBook = (book) => {
    // Remove selected book from library
    const updatedLibrary = category.filter((b) => b.title !== book.title);
    setCategory(updatedLibrary);
    // Add the selected book to the selected array
    setBooksSelected([...booksSelected, book]);
  };

  const handleRemoveSelectBook = (book) => {
    // Remove selected book from the second array
    const updatedBooksSelected = booksSelected.filter(
      (b) => b.title !== book.title
    );
    setBooksSelected(updatedBooksSelected);
    // Add the selected book to the first array
    setCategory((prevCategory) => [...prevCategory, book]);
  };

  function getBookCountsByCategory(books) {
    const bookCounts = books.reduce((counts, book) => {
      const category = book.genre;
      counts[category] = (counts[category] || 0) + 1;
      return counts;
    }, {});

    setBookCounts(bookCounts);
    return bookCounts;
  }

  const handleClick = (event) => {
    // let selectedGenre = '';
    const selectedGenre = event.currentTarget.dataset.genre;
    let booksByCategory = myBooksProps.filter((book) => {
      return book.dataGenre === selectedGenre;
    });

    if (selectedGenre === 'all') {
      setCategory(myBooksProps);
    } else {
      setCategory(booksByCategory);
    }

    // Update the book counts by category
    const updatedBookCounts = getBookCountsByCategory(booksByCategory);
    setBookCounts(updatedBookCounts);

    // Update the selected books array
    // const updatedSelectedBooks = booksSelected.filter((book) => {
    //   return booksByCategory.some(
    //     (selectedBook) => selectedBook.title === book.title
    //   );
    // });
    // setBooksSelected(updatedSelectedBooks);
  };

  return (
    <section className="" aria-label="All the books in our library">
      <header className="my-8">
        <h2 className="italic text-center text-4xl font-regular mb-8">{`"No todos los que vagan están perdidos..."`}</h2>
        <h3 className="mb-8 text-gray-500 font-bold text-xl">
          {Object.keys(bookCounts).length === 0 ? (
            <p>Todos: {category.length}</p>
          ) : (
            Object.keys(bookCounts).map((category, index) => (
              <span key={index}>
                {category}: {bookCounts[category]}
                {index !== Object.keys(bookCounts).length - 1 ? ', ' : ''}
              </span>
            ))
          )}
        </h3>
        <ul className="flex flex-wrap gap-2">
          <li>
            <button
              className="flex-1 category-btn bg-[#accbee] rounded-xl p-2"
              data-genre="all"
              onClick={handleClick}
            >
              Todos
            </button>
          </li>
          {BookCategories.map((cat, index) => (
            <li key={index}>
              <button
                className="text-gray-700 category-btn bg-[#accbee] rounded-xl p-2"
                type="button"
                data-genre={slugify(cat.genre)}
                onClick={handleClick}
              >
                {cat.genre}
              </button>
            </li>
          ))}
        </ul>
      </header>
      {/* <>{children}</> */}
      <Library
        category={category}
        booksSelected={booksSelected}
        handleSelectBook={handleSelectBook}
        handleRemoveSelectBook={handleRemoveSelectBook}
      >
        <UserReadingList
          className="basis-[10em] grow"
          booksSelectedNum={booksSelected.length}
        >
          {booksSelected?.map((book, index) => (
            <img
              onClick={() => handleRemoveSelectBook(book)}
              className={`w-full relative top-[${index}00px] cursor-pointer`}
              key={index}
              src={book.cover}
              alt={book.title}
            />
          ))}
        </UserReadingList>
      </Library>
    </section>
  );
}
