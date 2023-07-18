import { useMemo, useEffect } from "react";

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
  }, [libraryState.filtering, libraryState.seeing, setLibraryState]);

  return (
    <div className="flex items-center flex-wrap w-full">
      {/* current list total */}
      <p>
        {languageState.texts.seeing.title}{" "}
        {languageState.texts.seeing[libraryState.seeing]}
        <span className="alter-text text-sm mx-2">({totalLength})</span>
      </p>
      {/* If the user is using the genre filter */}
      {libraryState.filtering.length ? (
        <p>
          {">"} {libraryState.filtering}{" "}
          <span className="alter-text text-sm mx-1">
            ({libraryState.showing})
          </span>
        </p>
      ) : null}
    </div>
  );
}

export default HomeHeader;
