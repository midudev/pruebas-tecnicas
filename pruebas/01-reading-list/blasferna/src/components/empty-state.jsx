import { useFilterContext } from "@/context/store";
import Link from "next/link";

const NoResultIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      className="mb-5 w-full text-center text-gray-400"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <g fill="currentColor">
            <path d="M17.5 13c.27 0 .5.23.5.5s-.23.5-.5.5-.5-.23-.5-.5.23-.5.5-.5z"></path>
            <path d="M8.5 13c.27 0 .5.23.5.5s-.23.5-.5.5-.5-.23-.5-.5.23-.5.5-.5z"></path>
          </g>
        </g>
        <g
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <g stroke="currentColor">
            <path d="M23.43 23.401L21.214 21.186"></path>
            <path d="M29.914 27.086l-3.5-3.5c-.756-.756-2.072-.756-2.828 0-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l3.5 3.5c.378.378.88.586 1.414.586s1.036-.208 1.414-.586.586-.88.586-1.414-.208-1.036-.586-1.414z"></path>
            <circle cx="13" cy="13" r="11.5"></circle>
            <path d="M12 15.521c0-.55.45-1 1-1s1 .45 1 1"></path>
            <path d="M17.5 13c.27 0 .5.23.5.5s-.23.5-.5.5-.5-.23-.5-.5.23-.5.5-.5z"></path>
            <path d="M8.5 13c.27 0 .5.23.5.5s-.23.5-.5.5-.5-.23-.5-.5.23-.5.5-.5z"></path>
          </g>
          <g stroke="currentColor">
            <path d="M23.43 23.401L21.214 21.186"></path>
            <path d="M29.914 27.086l-3.5-3.5c-.756-.756-2.072-.756-2.828 0-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414l3.5 3.5c.378.378.88.586 1.414.586s1.036-.208 1.414-.586.586-.88.586-1.414-.208-1.036-.586-1.414z"></path>
            <circle cx="13" cy="13" r="11.5"></circle>
            <path d="M12 15.521c0-.55.45-1 1-1s1 .45 1 1"></path>
            <path d="M17.5 13c.27 0 .5.23.5.5s-.23.5-.5.5-.5-.23-.5-.5.23-.5.5-.5z"></path>
            <path d="M8.5 13c.27 0 .5.23.5.5s-.23.5-.5.5-.5-.23-.5-.5.23-.5.5-.5z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

const EmptyFileIcon = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        className="mb-5 w-full text-center text-gray-400"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <g>
              <path
                fill="currentColor"
                d="M14.5 17.5h3c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5z"
              ></path>
            </g>
          </g>
          <g
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
          >
            <g stroke="currentColor">
              <path d="M21.5 1.5L4.5 1.5 4.5 30.5 27.5 30.5 27.5 7.5"></path>
              <path d="M21.5 1.5L27.479 7.5 21.5 7.5 21.5 4"></path>
              <path d="M16 19c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5z"></path>
              <path d="M22.5 16a1 1 0 10-2 0"></path>
              <path d="M11.5 16a1 1 0 10-2 0"></path>
            </g>
            <g stroke="currentColor">
              <path d="M21.5 1.5L4.5 1.5 4.5 30.5 27.5 30.5 27.5 7.5"></path>
              <path d="M21.5 1.5L27.479 7.5 21.5 7.5 21.5 4"></path>
              <path d="M16 19c-.83 0-1.5-.67-1.5-1.5h3c0 .83-.67 1.5-1.5 1.5z"></path>
              <path d="M22.5 16a1 1 0 10-2 0"></path>
              <path d="M11.5 16a1 1 0 10-2 0"></path>
            </g>
          </g>
        </g>
      </svg>
    );
};

export function NoResultState() {
  const { searchQuery, genreFilter, setSearchQuery, setGenreFilter } =
    useFilterContext();
  const onClickHandler = () => {
    setSearchQuery("");
    setGenreFilter("");
  };

  let text = [];
  if (genreFilter) text.push(genreFilter);
  if (searchQuery) text.push(searchQuery);

  if (!searchQuery && !genreFilter) return null;

  return (
    <div className="mt-20 text-center">
      <NoResultIcon></NoResultIcon>
      <h3 className="mt-2 text-xl font-semibold text-white">
        No se encontraron resultados
      </h3>
      <p className="text-lsm mt-1 text-gray-400">
        <span className="font-medium">"{text.join(", ")}"</span> no coincidió
        con ningún resultado. <br /> Inténtalo de nuevo.
      </p>
      <div className="mt-6">
        <button
          type="button"
          onClick={onClickHandler}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}

export function EmptyState({ title, message, linkText, href }) {
  return (
    <div className="mt-20 text-center">
      <EmptyFileIcon></EmptyFileIcon>
      <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
      <p className="text-lsm mt-1 text-gray-400">{message}</p>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
