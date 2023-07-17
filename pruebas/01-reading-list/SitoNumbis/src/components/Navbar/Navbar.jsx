import { useMemo } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import Tippy from "@tippyjs/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as faBookmarkR } from "@fortawesome/free-regular-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

// images
import noPhoto from "../../assets/images/no-photo.webp";

// suspense
const Badge = loadable(() => import("../Badge/Badge"));

function Navbar() {
  const { languageState } = useLanguage();

  const { libraryState, setLibraryState } = useLibrary();

  const totalReading = useMemo(() => {
    return libraryState.readingList.size;
  }, [libraryState]);

  return (
    <header className={styles.main}>
      <div className={styles.navContainer}>
        <Link to="/">
          <h1
            className="bg-primary px-3 py-2 uppercase font-extrabold"
            aria-label={languageState.texts.ariaLabels.logo}
          >
            {languageState.texts.logo}
          </h1>
        </Link>
        <div className="flex items-center gap-5">
          <Badge number={totalReading}>
            <Tippy content={languageState.texts.ariaLabels.toReadingList}>
              <button
                onClick={() => setLibraryState({ type: "toggle-see" })}
                className={`text-xl icon-button ${
                  libraryState.seeing === "reading-list"
                    ? "bg-primary text-dark-text"
                    : ""
                }`}
                aria-label={languageState.texts.ariaLabels.toReadingList}
              >
                <FontAwesomeIcon
                  icon={totalReading ? faBookmark : faBookmarkR}
                />
              </button>
            </Tippy>
          </Badge>
          <img
            className="w-10 h-10 rounded-full"
            loading="lazy"
            src={noPhoto}
            alt="user-photo"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
