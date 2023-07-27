import PropTypes from "prop-types";

const variations = [
  {
    favorite: "",
    title: "Agregar a lista de lectura",
  },
  {
    favorite: "fill-gray-400",
    title: "Remover de la lista de lectura",
  },
];

export function BooksList({ data, isReadingList = false, onFavoriteClick }) {
  const variation = isReadingList ? variations[1] : variations[0];

  const list = data.map((el, index) => {
    const book = el.book;
    return (
      <li key={index} className="w-52 sm:w-full mx-auto   ">
        <div className="mb-4">
          <img
            src={book.cover}
            className="object-cover h-72 w-full rounded-lg border border-gray-800"
            alt={`Portada del libro: ${book.title}`}
          ></img>
        </div>

        <div className="flex justify-between items-start mb-3 gap-1">
          <span className="leading-tight font-semibold text-gray-300">{book.title}</span>
          <button
            type="button"
            className="shrink-0 bg-zinc-800 h-8 w-8 flex items-center justify-center rounded-md transition-colors duration-200 hover:bg-zinc-700"
            onPointerDown={() => onFavoriteClick(book["ISBN"])}
            aria-label={variation.title}
            title={variation.title}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-6 h-6 ${variation.favorite}`}
              aria-hidden={true}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>

        <div className="mb-3 text-sm">
          <p className="text-gray-500 leading-tight mb-4">{book.synopsis}</p>
          <p className="text-gray-400 font-medium">• {book.genre}</p>
          <p className="text-gray-400 font-medium italic">{book.pages} páginas</p>
        </div>
      </li>
    );
  });

  return (
    <section>
      {data.length !== 0 ? (
        <ul className="grid sm:grid-cols-books gap-5">{list}</ul>
      ) : (
        <div className="text-gray-400 text-center">
          <div className="flex justify-center mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-36 h-36"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
              />
            </svg>
          </div>

          <h2 className="font-bold text-2xl mb-1">¿PERO QUÉ HA PASAOO?</h2>
          <p className="text-base">
            No se han podido encontrar libros, ¿por qué no pruebas a modificar los
            filtros?
          </p>
        </div>
      )}
    </section>
  );
}

BooksList.propTypes = {
  data: PropTypes.array.isRequired,
  isReadingList: PropTypes.bool,
  onFavoriteClick: PropTypes.func.isRequired,
};
