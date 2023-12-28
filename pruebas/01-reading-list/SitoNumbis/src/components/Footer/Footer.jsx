import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// styles
import styles from "./styles.module.css";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";

function Footer() {
  const { languageState } = useLanguage();

  return (
    <footer className={styles.main}>
      <div className={styles.footerElements}>
        <p>
          {languageState.texts.copyright}{" "}
          <span className="alter-text">{new Date().getFullYear()}</span>
        </p>
        <a
          aria-label={languageState.texts.ariaLabels.seeSourceCode}
          name="source-code"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/SitoNumbis/pruebas-tecnicas/tree/main/pruebas/01-reading-list/SitoNumbis"
          className={styles.link}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
