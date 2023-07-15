import { Link } from "react-router-dom";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

// styles
import styles from "./styles.module.css";

// components
import SearchWrapper from "./SearchWrapper/SearchWrapper";

// images
import noPhoto from "../../assets/images/no-photo.webp";

function Navbar() {
  const { languageState } = useLanguage();

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
        <div className="flex items-center gap-3">
          <SearchWrapper />
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
