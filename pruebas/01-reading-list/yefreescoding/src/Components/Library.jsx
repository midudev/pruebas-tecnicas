/* eslint-disable react/prop-types */
import BooksCard from './BooksCard';

export default function Library({ category, handleSelectBook, children }) {
  return (
    <div className="bg-gradient-to-r from-[#accbee] to-[#e7f0fd] p-4 md:p-12  rounded-xl border border-gray-400 flex flex-wrap-reverse md:flex-wrap items-start gap-4 mb-[10vh]">
      <div className="book-shelter basis-[40em] grow">
        {category.map((book, index) => (
          <BooksCard
            selectBook={() => handleSelectBook(book)}
            key={index}
            title={book.title}
            pages={book.pages}
            genre={book.genre}
            year={book.year}
            synopsis={book.synopsis}
            cover={book.cover}
            author={book.author}
            ISBN={book.ISBN}
            dataGenre={book.dataGenre}
          />
        ))}
      </div>
      {children}
    </div>
  );
}
