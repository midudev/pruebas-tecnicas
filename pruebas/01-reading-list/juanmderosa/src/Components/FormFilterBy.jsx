import { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";

export const FormFilterBy = () => {
  const { setFilterType } = useContext(BooksContext);

  const handleFilterBy = (e) => {
    setFilterType(e.target.value);
  };

  return (
    <form
      onChange={(e) => handleFilterBy(e)}
      className="filterBy-form"
    >
      <label>Filtrar por: </label>
      <div className="form-label">
        <label htmlFor="filterbypages">Todos</label>
        <input
          type="radio"
          name="filterType"
          id="nofilter"
          value="nofilter"
        />
      </div>
      <div className="form-label">
        <label htmlFor="filterbypages">Cantidad de páginas</label>
        <input
          type="radio"
          name="filterType"
          id="filterbypages"
          value="filterbypages"
        />
      </div>
      <div className="form-label">
        <label htmlFor="filterbygenre">Género</label>
        <input
          type="radio"
          name="filterType"
          id="filterbygenre"
          value="filterbygenre"
        />
      </div>
    </form>
  );
};
