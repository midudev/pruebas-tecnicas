import { useRef, useState, useCallback, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";
import { useFilters } from "../../contexts/FiltersProvider";

// components
import Genre from "./Genre/Genre";

// styles
import styles from "./styles.module.css";

function GenreBar() {
  const { libraryState } = useLibrary();
  const { languageState } = useLanguage();
  const { filtersState, setFiltersState } = useFilters();

  const changeFilter = useCallback(
    (value) => {
      if (value !== filtersState.genre)
        setFiltersState({ type: "set-filter", filter: "genre", value });
      else setFiltersState({ type: "set-filter", filter: "genre", value: "" });
    },
    [filtersState.genre, setFiltersState]
  );

  const filterContainer = useRef(null);
  const [arrows, setArrows] = useState(false);
  const [barMaxPosition, setBarMaxPosition] = useState(0);
  const [barMovement, setBarMovement] = useState(0);

  const onResize = (e) => {
    const entity = e[0];
    if (entity) {
      const { target } = entity;
      const { offsetWidth, scrollWidth } = target;
      if (offsetWidth < scrollWidth) {
        setBarMaxPosition(Math.floor(scrollWidth / offsetWidth));
        setArrows(true);
      }
    }
  };

  useEffect(() => {
    const currentRef = filterContainer.current;
    const observer = new ResizeObserver(onResize);
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.disconnect();
    };
  }, [filterContainer]);

  const swipeRight = useCallback(() => {
    setBarMovement((barMovement) => barMovement - 1);
    if (
      filterContainer.current.scrollLeft + filterContainer.current.offsetWidth <
      filterContainer.current.scrollWidth
    )
      filterContainer.current.scrollLeft -= filterContainer.current.offsetWidth;
    else
      filterContainer.current.scrollLeft -=
        filterContainer.current.scrollWidth -
        filterContainer.current.scrollLeft;
  }, [filterContainer]);

  const swipeLeft = useCallback(() => {
    setBarMovement((barMovement) => barMovement + 1);
    if (
      filterContainer.current.scrollLeft + filterContainer.current.offsetWidth <
      filterContainer.current.scrollWidth
    )
      filterContainer.current.scrollLeft += filterContainer.current.offsetWidth;
    else
      filterContainer.current.scrollLeft +=
        filterContainer.current.scrollWidth -
        filterContainer.current.scrollLeft;
  }, [filterContainer]);

  return (
    <section className="relative bg-dark-alt-bg shadow-sm">
      {arrows ? (
        <button
          name="swipe-to-right"
          onClick={swipeRight}
          aria-label={languageState.texts.ariaLabels.genreLeft}
          aria-disabled={barMovement === 0}
          disabled={barMovement === 0}
          className={`left-0 ${styles.arrowButton}`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      ) : null}

      <ul
        ref={filterContainer}
        className={`${styles.genreRows} ${arrows ? styles.hasArrows : ""}`}
      >
        {libraryState.genres.map((genre) => (
          <li key={genre}>
            <Genre
              genre={genre}
              active={filtersState.genre === genre}
              onClick={changeFilter}
            />
          </li>
        ))}
      </ul>
      {arrows ? (
        <button
          name="swipe-to-left"
          onClick={swipeLeft}
          aria-label={languageState.texts.ariaLabels.genreRight}
          aria-disabled={barMovement === barMaxPosition}
          disabled={barMovement === barMaxPosition}
          className={`right-0 ${styles.arrowButton}`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      ) : null}
    </section>
  );
}

export default GenreBar;
