import PagesSlider from "../PagesSlider/PagesSlider";
import GenreFilter from "../GenreFilter/GenreFilter";
import database from "../../data/database";
import useBooks from "../../store/store";

const FiltersHeader = () => {
  const { books } = useBooks((state) => ({
    books: state.books,
  }));

  return (
    <>
      <header className="bg-white w-full p-4 border border-black border-r-4 border-b-4 rounded-md">
        <h1 className="text-4xl font-extrabold">
          Bienvenido a la libreria de <b>Jotape_Dev!</b>
        </h1>
        <h3 className="text-2xl">
          {books.filter((book) => !book.reserved).length} libros disponibles
        </h3>
        <h3 className="text-2xl">
          {books.filter((book) => book.reserved).length} libros en la lista de
          lectura
        </h3>
        <section className="w-full flex justify-around border border-black border-r-4 border-b-4 rounded-md">
          <PagesSlider></PagesSlider>
          <GenreFilter genres={database.genres}></GenreFilter>
        </section>
      </header>
    </>
  );
};

export default FiltersHeader;
