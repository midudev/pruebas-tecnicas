import { useDispatch, useSelector } from "react-redux";
import { changePages } from "../redux/pagesSlice";

const PagesFilter = () => {
  
  const dispatch = useDispatch();

  const library = useSelector(state => state.library);
  const pages = useSelector(state => state.pages);
  const darkMode = useSelector(state => state.darkMode);

  // Find the minimum and maximum number of pages from the books in the library
  const min = Math.min(...library.map(i => i.book.pages));
  const max = Math.max(...library.map(i => i.book.pages));

  // Calculate the number of books with pages less than or equal to the current 'pages' value
  const pagesBooks = library.filter(i => i.book.pages <= pages).length;

  // Handle change event for the input range
  const handleChange = (e) => {
    dispatch(changePages(e.target.value));
  };

  return (
    <div>
      <p className="text-lg" >Filtrar por Páginas:</p>
      {/* Display the maximum number of pages allowed */}
      <p>max {pages} páginas </p>
      <section className="flex items-center gap-1">
        {/* Input range for selecting the number of pages */}
        <input onChange={handleChange} type="range" min={min} max={max} step={1} value={pages} className={`appearance-none h-1 cursor-pointer hover:opacity-90 ${darkMode?'light-mode':'dark-mode'}`} />
        {/* Number of filtered books with pages less than or equal to the current value */}
        <p className="text-lg" >({pagesBooks})</p>
      </section>
    </div>
  );
};

export { PagesFilter };