import PropTypes from "prop-types";
import { useId } from "react";

export function SearchBar({ onSubmit, onChange, placeholder, className = "" }) {
  const id = useId();

  return (
    <form onSubmit={onSubmit} className="relative flex items-center">
      <input
        type="search"
        name={id}
        id={id}
        placeholder={placeholder}
        className={`text-white w-full pr-12 ${className}`}
        onChange={onChange}
      />

      <button
        type="button"
        className="block absolute right-0 mr-3"
        aria-label="Buscar libro por título"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-white"
          aria-hidden={true}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
};
