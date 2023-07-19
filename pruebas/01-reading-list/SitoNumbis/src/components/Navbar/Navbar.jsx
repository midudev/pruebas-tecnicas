import { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";
import Tippy from "@tippyjs/react";

import { faBookOpen, faBookmark } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

// images
import logo from "../../assets/images/logo.svg";
import noPhoto from "../../assets/images/no-photo.webp";
import IconButton from "../IconButton/IconButton";

// suspense
const Badge = loadable(() => import("../Badge/Badge"));

function Navbar() {
  const { languageState } = useLanguage();

  const { libraryState, setLibraryState } = useLibrary();

  const totalReading = useMemo(() => {
    return libraryState.readingList.size;
  }, [libraryState]);

  const toggleSeeing = useCallback(() => {
    setLibraryState({ type: "toggle-see" });
  }, [setLibraryState]);

  return (
    <header className={styles.main}>
      <div className={styles.navContainer}>
        <Link name="logo" to="/" className="flex items-center">
          <img className="w-8 h-8" src={logo} alt="Sito's library logo" />
          <h1
            className="px-3 py-2 uppercase font-extrabold"
            aria-label={languageState.texts.ariaLabels.logo}
          >
            {languageState.texts.logo}
          </h1>
        </Link>
        <nav className="flex items-center gap-5">
          <Badge number={totalReading} show={libraryState.seeing === "all"}>
            <Tippy
              className="hide-on-mobile"
              content={
                libraryState.seeing === "reading-list"
                  ? languageState.texts.ariaLabels.toMainStock
                  : languageState.texts.ariaLabels.toReadingList
              }
            >
              <IconButton
                name="toggle-seeing"
                ariaLabel={languageState.texts.ariaLabels.toReadingList}
                onClick={toggleSeeing}
                className={`text-xl`}
                icon={
                  libraryState.seeing === "reading-list"
                    ? faBookOpen
                    : faBookmark
                }
              />
            </Tippy>
          </Badge>
          <img
            className="w-10 h-10 rounded-full"
            loading="lazy"
            src={noPhoto}
            alt="user"
          />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
