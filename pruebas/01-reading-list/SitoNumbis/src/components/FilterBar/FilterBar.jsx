import { useRef, useState, useCallback, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// components
import Genre from "./Genre/Genre";

// styles
import styles from "./styles.module.css";

function FilterBar() {
  const { languageState } = useLanguage();

  const { libraryState, setLibraryState } = useLibrary();

  const [active, setActive] = useState();

  const changeFilter = useCallback(
    (value) => {
      if (value === active) setActive("");
      else setActive(value);
    },
    [active]
  );

  useEffect(() => {
    setLibraryState({ type: "toggle-filter", filtering: active });
  }, [active]);

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
          onClick={swipeRight}
          aria-label={languageState.texts.ariaLabels.genreLeft}
          aria-disabled={`${barMovement === 0}`}
          disabled={barMovement === 0}
          className={`left-0 ${styles.arrowButton}`}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      ) : null}

      <div
        ref={filterContainer}
        className={`${styles.genreRows} ${arrows ? styles.hasArrows : ""}`}
      >
        {libraryState.genres.map((genre) => (
          <Genre
            key={genre}
            genre={genre}
            active={active === genre}
            onClick={changeFilter}
          />
        ))}
      </div>
      {arrows ? (
        <button
          onClick={swipeLeft}
          aria-label={languageState.texts.ariaLabels.genreRight}
          aria-disabled={`${barMovement === barMaxPosition}`}
          disabled={barMovement === barMaxPosition}
          className={`right-0 ${styles.arrowButton}`}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      ) : null}
    </section>
  );
}

export default FilterBar;
