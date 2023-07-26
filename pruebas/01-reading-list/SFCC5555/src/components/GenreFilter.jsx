import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGenre } from "../redux/genreSlice";

const GenreFilter = () => {
  const dispatch = useDispatch();

  // State to toggle the status of the genre filter menu
  const [filterMenuStatus, setFilterMenuStatus] = useState(false);

  const genre = useSelector(state => state.genre);
  const darkMode = useSelector(state => state.darkMode);
  const library = useSelector(state => state.library);

  // Calculate the number of books with the selected genre
  const genreBooks = genre === 'Todos' ? library.length : library.filter(i => i.book.genre === genre).length;

  return (
    <div className="flex flex-col text-lg sm:gap-3 absolute right-5 sm:right-0 sm:relative z-20" >
      <p>Filtrar por Género: </p>
      {/* Button to toggle the status of the genre filter menu */}
      <button onClick={() => setFilterMenuStatus(prev => !prev)} className={`${darkMode ? 'light-mode' : 'dark-mode'} px-1 py-1 rounded-md hover:opacity-80`} >
        {/* Display the selected genre and the number of books with that genre */}
        {genre} ({genreBooks}) <i className="bi bi-funnel-fill" />
      </button>
      {/* Genre filter menu that only displays when the status is true */}
      {filterMenuStatus && (
        <section className={`absolute flex flex-col -bottom-1 translate-y-full left-0 p-3 rounded-md gap-1 ${darkMode ? 'light-mode' : 'dark-mode'} max-h-96 overflow-y-auto`}>
          {/* Using 'map', we create a new list with all the available genres in the library and put it in alphabetical order. Then, we transform it into a 'Set' to remove duplicate elements, and finally, we convert it back to an array to map and display each of them in a div within the menu. */}
          {new Array(...new Set(library.map(i => i.book.genre).sort()), 'Todos').map(i => (
            // The onClick event changes the genre value used for filtering the books, selecting from the available options in the menu, also close the menu
            <div key={i} onClick={() => {setFilterMenuStatus(false); dispatch(changeGenre(i))}} className={`cursor-pointer hover:opacity-80 ${i==='Todos'&&'opacity-90 border-t-2 border-gray-500/50 pt-3'}`} >{i}</div>
          ))}
        </section>
      )}
    </div>
  );
};

export { GenreFilter };