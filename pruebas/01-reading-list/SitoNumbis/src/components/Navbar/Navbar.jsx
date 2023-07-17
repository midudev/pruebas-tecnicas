import { useMemo } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";

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

  const { libraryState } = useLibrary();

  const totalReading = useMemo(() => {
    return Object.values(libraryState.readingList);
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
          <Badge number={20}>
            <Link
              to="/reading-list"
              className="text-xl"
              aria-label={languageState.texts.ariaLabels.toReadingList}
            >
              <FontAwesomeIcon
                icon={
                  libraryState.readingList.length ? faBookmark : faBookmarkR
                }
              />
            </Link>
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
