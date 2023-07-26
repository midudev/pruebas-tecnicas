import { PagesFilter } from "../components/PagesFilter"
import { GenreFilter } from "../components/GenreFilter"
import { Detail } from "../components/Detail"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { changeListedStatus } from "../redux/librarySlice"
import { SearchEngine } from "./SearchEngine"
import { Routes, Route, Link } from "react-router-dom"

const BooksAvailable = () => {

  const dispatch = useDispatch();

  const library = useSelector(state => state.library);
  const genre = useSelector(state => state.genre);
  const pages = useSelector(state => state.pages);
  const inputValue = useSelector(state => state.inputValue);

  // Calculate the number of books available and listed from the library
  const booksAvailable = library.filter(i => !i.listed).length;
  const booksListed = library.filter(i => i.listed).length;

  // Create a regular expression (regExp) from the value of the "inputValue" variable
  // The regular expression will be used to perform a case-insensitive search in the book titles
  const regExp = new RegExp(inputValue,'i');

  return (
    // If there are listed books in the reading list, the width of the books available section is reduced to 2/3 to make space for the reading list section, which will occupy the remaining 1/3 (Only in Desktop version)
    <div className={`w-full ${booksListed > 0 && 'sm:w-2/3'} flex flex-col gap-4`}>
      <section>
        {/* If the number of available books is greater than 1, an 's' is added to the words to make them plural. */}
        <h2 className="text-3xl">{booksAvailable} Libro{booksAvailable !== 1 && 's'} Disponible{booksAvailable !== 1 && 's'}</h2>
        {booksListed > 0 && <p className="text-2xl">{booksListed} en la Lista de Lectura</p>}
      </section>
      <section className="w-full flex flex-col items-start md:flex-row md:items-end md:justify-between gap-4 md:gap-2 pr-5">
        <PagesFilter />
        <SearchEngine />
        <GenreFilter />
      </section>
      {/* If there are books in the reading list, an extra padding in the bottom is added in the mobile version to ensure that the reading list section does not overlap with the books available section, allowing all of them to be visible. */}
      <section className={`flex items-center flex-wrap gap-8 mt-4 ${booksListed > 0 && 'pb-96 sm:pb-0'}`}>
        {library
          .filter(i=>regExp.test(i.book.title) || regExp.test(i.book.title.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))) // Filter the "library" array to obtain books whose titles match the "regExp" regular expression. The normalize and replace methods are used to ensure that it also works regardless of the presence of accents.
          .filter(i => i.book.pages <= pages) // The filter by maximum number of pages is applied when rendering the books in the books available section
          .filter(i => genre === 'Todos' ? i : i.book.genre === genre) // The filter genre is applied when rendering the books in the books available section
          .map(i => ( // Dynamically render the available books, each in a separate div element.
            <div key={i.book.ISBN} className="w-36 h-52 relative"> 
              {/* If the book is not listed the onClick event change the state of the 'listed' property to true for the clicked book's image (book cover) to add it to the reading list. */}
              {/* The book title is displayed using the 'title' attribute when hovering over the book image (book cover). */}
              <img
                onClick={() => dispatch(changeListedStatus(i.book.ISBN))}
                title={i.book.title}
                className={`w-full h-full cursor-pointer rounded-lg cover`}
                src={i.book.cover}
                alt={'Portada de ' + i.book.title}
              />
              {/* As in the img tag if the book is not listed the onClick event change the state of the 'listed' property to true for the clicked book's add-icon to add it to the reading list, otherwise, the icon is hidden. */}
              <i
                onClick={() => dispatch(changeListedStatus(i.book.ISBN))}
                className={`${i.listed&&'hidden'} bi bi-plus-circle-fill text-2xl absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer sm:opacity-0`}
              />
              {/* Icon in a Link element for navigating to the route displaying the book details. */}
              {/* The 'title' attribute shows information about the book's genre and number of pages, which are relevant for the available filters. This information is displayed when hovering over the info-icon. */}
              <Link
                to={`/${i.book.title.replaceAll(' ','-')}`}
                className="bi bi-info-square-fill text-2xl absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3 hover:scale-110 cursor-pointer z-10"
                title={'Género: ' + i.book.genre + '\n' + i.book.pages + ' páginas'}
              />
              {/* Layer to dim the image of the unavailable book and block actions. */}
              <div 
                className={`absolute ${!i.listed && 'hidden'} top-0 w-full h-full bg-black/75 text-white/75 cursor-not-allowed rounded-lg text-center pt-20`}
                title={i.book.title}
              >
                <i className="bi bi-eyeglasses text-3xl" />
              </div>
            </div>
          ))}
      </section>
      {/* Define routes using React Router's <Routes> component to display book details.
      For each item 'i' in the 'library' array, create a dynamic route with the book's title in the URL.
      The spaces of the books title are replaced with dashes to form the path.
      When the route matches, render the 'Detail' component with the book data ('i') passed as a prop.*/}
      <Routes>
        {library.map(i=><Route key={i.book.ISBN} path={`/${i.book.title.replaceAll(' ','-')}`} element={<Detail data={i} />}/>)}
      </Routes>
    </div>
  );
};

export { BooksAvailable };