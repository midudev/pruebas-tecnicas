import { useMemo, useEffect, useCallback } from "react";

// components
import Slider from "../components/Slider/Slider";

// contexts
import { useLanguage } from "../contexts/LanguageProvider";
import { useLibrary } from "../contexts/LibraryProvider";

function HomeHeader() {
  const { libraryState, setLibraryState } = useLibrary();

  const { languageState } = useLanguage();

  const totalLength = useMemo(() => {
    return libraryState.seeing === "all"
      ? libraryState.available
      : libraryState.readingList.size;
  }, [
    libraryState.seeing,
    libraryState.available,
    libraryState.readingList.size,
  ]);

  // get the current showing items
  useEffect(() => {
    // milliseconds for the dom
    setTimeout(() => {
      setLibraryState({
        type: "set-showing",
        showing: document.querySelectorAll(".book").length,
      });
    }, 100);
  }, [libraryState.filters.genre, libraryState.seeing, setLibraryState]);

  const handlePages = useCallback(
    (e) => {
      const { value } = e.target;
      setLibraryState({
        type: "set-filter",
        filter: "pages",
        value: Number(value),
      });
    },
    [setLibraryState]
  );

  return (
    <section>
      <div className="flex items-center flex-wrap w-full">
        {/* current list total */}
        <p>
          {languageState.texts.homeHeader.title}{" "}
          {languageState.texts.homeHeader[libraryState.seeing]}
          <span className="alter-text text-sm mx-2">({totalLength})</span>
        </p>
        {/* If the user is using the genre filter */}
        {libraryState.filters.genre.length ? (
          <p>
            {">"} {libraryState.filters.genre}{" "}
            <span className="alter-text text-sm mx-1">
              ({libraryState.showing})
            </span>
          </p>
        ) : null}
      </div>
      <div>
        <p className="alter-text">
          {languageState.texts.homeHeader.pageFilter}
        </p>
        <Slider
          max={9999}
          min={1}
          value={libraryState.filters.pages}
          handleRange={handlePages}
        />
      </div>
    </section>
  );
}

export default HomeHeader;
