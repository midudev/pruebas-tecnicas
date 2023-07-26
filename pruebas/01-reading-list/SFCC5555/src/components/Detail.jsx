import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Detail = ({ data }) => {
  const darkMode = useSelector(state => state.darkMode);

  return (
    // Container for the book details modal
    <div className="fixed top-0 left-0 h-screen w-full flex items-center justify-center bg-black/75 z-20 p-5">
      <div className={`relative w-full md:w-2/3 lg:w-1/2 flex flex-col sm:flex-row p-5 gap-3 rounded-2xl ${darkMode ? 'dark-mode' : 'light-mode'}`}>
        <img className="w-52 h-80 sm:w-72 sm:h-96 rounded-lg cursor-crosshair" src={data.book.cover} alt={'Portada de ' + data.book.title} />
        <section className="sm:pt-8">
          <p><span className="opacity-90">Título:</span> {data.book.title}</p>
          <p><span className="opacity-90">Autor:</span> {data.book.author.name}</p>
          <p><span className="opacity-90">Género:</span> {data.book.genre}</p>
          <p><span className="opacity-90">Año:</span> {data.book.year}</p>
          <p><span className="opacity-90">Páginas:</span> {data.book.pages}</p>
          <p className="mt-3"><span className="opacity-90">Sinopsis:</span> {data.book.synopsis}</p>
        </section>
        {/* Close button to navigate back to the main page */}
        <Link to='/' className="absolute top-4 right-3 bi bi-x-circle-fill text-3xl cursor-pointer hover:opacity-75" />
      </div>
    </div>
  );
};

// PropTypes for type checking of the 'data' prop
Detail.propTypes = { data: PropTypes.object.isRequired};

export { Detail };