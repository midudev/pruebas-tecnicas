/* eslint-disable react/prop-types */

const ListofBooks = ({ listOfBooks, readList, handleAddedBookToReadList }) => {
  return (
    <section className="flex flex-col gap-10">
      <span className="relative text-lg sm:text-2xl font-bold text-gray-800">
        Libros disponibles
        <span className="text-amber-700 text-sm absolute top-0">
          {listOfBooks.length}
        </span>
      </span>
      <section
        className={`custom-grid ${
          readList.length !== 0
            ? "sm:grid-cols-1 md:grid-cols-2"
            : "2xl:grid-cols-5 "
        }`}
      >
        {listOfBooks.map(({ book }) => (
          <header
            onClick={() => handleAddedBookToReadList(book.ISBN)}
            key={book.ISBN}
            className="flexCenter relative flex-col max-w-xs gap-3 group ld:whitespace-nowrap text-center "
          >
            <h2>{book.title}</h2>
            <img
              src={book.cover}
              className="w-full h-full object-cover rounded-2xl "
            />
            <div className="justify-end items-end hidden group-hover:flex w-full h-1/3 bg-gradient-to-b from-transparent to-black/90 rounded-b-2xl gap-2 absolute bottom-0 right-0 font-semibold text-lg text-white p-4">
              <span className="w-full">Año : {book.year}</span>
            </div>
          </header>
        ))}
      </section>
    </section>
  );
};

export default ListofBooks;
