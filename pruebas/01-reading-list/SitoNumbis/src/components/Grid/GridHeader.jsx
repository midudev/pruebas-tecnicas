import { useState, useEffect, useCallback } from "react";

import { css } from "@emotion/css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faSearch,
  faFilterCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

// components
import Slider from "../Slider/Slider";
import IconButton from "../IconButton/IconButton";
import SimpleInput from "../SimpleInput/SimpleInput";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";
import { useFilters } from "../../contexts/FiltersProvider";

// styles
import styles from "./styles.module.css";

function HomeHeader() {
  const { languageState } = useLanguage();
  const { filtersState, setFiltersState } = useFilters();
  const { libraryState, setLibraryState } = useLibrary();

  const [showingFilters, setShowingFilters] = useState(false);

  // get the current showing items
  useEffect(() => {
    // milliseconds for the dom
    setTimeout(() => {
      setLibraryState({
        type: "set-showing",
        showing: document.querySelectorAll(".book").length,
      });
    }, 100);
  }, [filtersState, setLibraryState]);

  const handlePages = useCallback(
    (e) => {
      const { value } = e.target;
      setFiltersState({
        type: "set-filter",
        filter: "pages",
        value: Number(value),
      });
    },
    [setFiltersState]
  );

  const handleSearch = useCallback(
    (e) => {
      const { value } = e.target;
      setFiltersState({ type: "set-filter", filter: "title", value });
    },
    [setFiltersState]
  );

  return (
    <section>
      <div className="flex items-center flex-wrap w-full">
        {/* current list total */}
        <p>
          {languageState.texts.homeHeader.title}{" "}
          {languageState.texts.homeHeader[libraryState.seeing]}
          <span className="alter-text text-sm mx-2">
            ({libraryState.available})
          </span>
        </p>
        {/* If the user is using the genre filter */}
        {filtersState.genre.length ? (
          <p>
            {">"} {filtersState.genre}{" "}
            <span className="alter-text text-sm mx-1">
              ({libraryState.showing})
            </span>
          </p>
        ) : null}

        <IconButton
          className="mt-1"
          onClick={() => setShowingFilters((showingFilters) => !showingFilters)}
          icon={!showingFilters ? faFilter : faFilterCircleXmark}
        />
      </div>
      <div
        className={`${styles.gridFilter} ${css({
          gridTemplateRows: showingFilters ? "1fr" : "0fr",
        })}`}
      >
        <div className="flex overflow-hidden gap-4 flex-wrap">
          <div className={styles.pageFilter}>
            <p className="alter-text">
              {languageState.texts.homeHeader.pageFilter}
            </p>
            <Slider
              max={3999}
              min={1}
              value={filtersState.pages}
              handleRange={handlePages}
            />
          </div>
          <SimpleInput
            className={styles.searchInput}
            leftIcon={
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute text-dark-alt-text -translate-y-[50%] top-[50%] left-1"
              />
            }
            label={languageState.texts.homeHeader.titleFilter}
            inputProps={{
              type: "search",
              value: filtersState.title,
              onChange: handleSearch,
              className: "rounded-3xl bg-dark-alt-bg pl-7 py-1 w-full text-sm",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default HomeHeader;
