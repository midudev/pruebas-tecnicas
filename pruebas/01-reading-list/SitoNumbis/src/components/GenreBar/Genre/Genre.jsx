import { memo } from "react";
import PropTypes from "prop-types";

// contexts
import { useLanguage } from "../../../contexts/LanguageProvider";

// styles
import styles from "./styles.module.css";

function Genre({ genre, active, onClick }) {
  const { languageState } = useLanguage();

  return (
    <button
      name="filter-by-genre"
      aria-label={`${languageState.texts.ariaLabels.filterByGenre} ${genre}`}
      onClick={() => onClick(genre)}
      className={`${styles.main} ${active ? styles.active : styles.available} `}
    >
      {genre}
    </button>
  );
}

Genre.propTypes = {
  genre: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

const GenreMemo = memo((props) => <Genre {...props} />, arePropsEqual);

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.genre === newProps.genre &&
    oldProps.active === newProps.active &&
    oldProps.onClick === newProps.onClick
  );
}

GenreMemo.displayName = "Genre";

export default GenreMemo;
