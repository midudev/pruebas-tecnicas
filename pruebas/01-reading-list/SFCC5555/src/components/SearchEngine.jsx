import { useSelector, useDispatch } from "react-redux"
import { changeInputValue } from "../redux/inputValueSlice"

const SearchEngine = () => {

  const dispatch = useDispatch();

  const searchInputValue = useSelector(state => state.searchInputValue);
  const darkMode = useSelector(state => state.darkMode);

  const handleChange = (e) => {
    // Dispatch the action to update the input value in Redux store.
    dispatch(changeInputValue(e.target.value));
  }

  return (
    <div className="relative flex flex-col sm:gap-3">
      <p className="text-lg">Buscar por Título:</p>
      <input
        id="search"
        type="text"
        value={searchInputValue}
        onChange={handleChange}
        className={`appearance-none w-44 sm:w-auto  md:w-36 lg:w-auto border-none outline-none focus:ring-0 hover:opacity-95 text-lg rounded-md pl-2 pr-8 py-1 ${darkMode ? 'light-mode' : 'dark-mode'}`}
      />
      {/*Icon placed within a label element to associate it with the search field.*/}
      <label
        htmlFor="search"
        className={`absolute bottom-0 right-0 font-bold px-2 py-1 bi bi-search text-lg cursor-pointer hover:opacity-80`}
        style={{ color: `var(--text-${darkMode ? 'light' : 'dark'})` }}
      />
    </div>
  );
};

export { SearchEngine };