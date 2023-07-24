import { useBooks } from "./hooks/useBooks";
import { useCategory } from "./hooks/useCategory";
import usePages from "./hooks/usePages";
import useSearch from "./hooks/useSearch";
import { filterBooks } from "./logic/filter";
import { genres } from "./logic/genres";
import { maxPages } from "./logic/pages";

function App() {
  const { category, handleCategoryFilter } = useCategory();
  const { search, handleSearch } = useSearch();
  const { pages, handlePagesRange } = usePages();
  const {
    booksAvailable,
    readingList,
    handleClickInBookAvailable,
    handleClickInBookInReadingList,
    morePriority,
    lessPriority,
  } = useBooks();

  const filteredBooks = filterBooks({
    booksAvailable,
    category,
    search,
    pages,
  });

  return (
    <main>
      <section className="books-available-list-and-filters-container">
        <div className="filters">
          <input
            className="search-filter"
            type="text"
            onChange={handleSearch}
            placeholder="Buscar"
          />

          <select className="category-filter" onChange={handleCategoryFilter}>
            <option value="">Seleccione una categoría</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          <label>
            <input
              type="range"
              min="0"
              max={maxPages}
              onChange={handlePagesRange}
              className="pages-filter"
            />
            <span>{pages}</span> o más páginas
          </label>
        </div>

        <span className="filtered-boks-quantity">
          {category ? category : "Todos"} &#40;{filteredBooks.length}&#41;
        </span>

        <div className="books-available-list">
          {filteredBooks.map((book) => (
            <img
              key={book.ISBN}
              onClick={() => handleClickInBookAvailable(book)}
              className="img-book-available"
              src={book.cover}
              alt={"Portada del libro " + book.title}
            />
          ))}
        </div>
      </section>

      <section className="reading-list-container">
        <span className="reading-list-title">
          Lista de lectura &#40;{readingList.length}&#41;
        </span>

        <div className="reading-list">
          {readingList.map((book, index) => (
            <div
              key={book.ISBN}
              style={{
                top: `${(20 + index * 2) * index}px`,
              }}
              className="reading-list_book"
            >
              <div className="priority-buttons-container">
                {index !== 0 && (
                  <button
                    className="more-priority-button"
                    onClick={() => morePriority(book)}
                  >
                    ⬆
                  </button>
                )}
                {index !== readingList.length - 1 && (
                  <button
                    className="less-priority-button"
                    onClick={() => lessPriority(book)}
                  >
                    ⬇
                  </button>
                )}
              </div>

              <img
                onClick={() => handleClickInBookInReadingList(book)}
                style={{
                  width: `${150 + 10 * index}px`,
                }}
                className="reading-list-img"
                src={book.cover}
                alt={"Portada del libro " + book.title}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
