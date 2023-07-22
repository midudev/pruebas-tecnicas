import { useCallback, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

import { parseQueries } from "some-javascript-utils/browser";

import { faClose } from "@fortawesome/free-solid-svg-icons";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";
import { useLightBox } from "./LightBoxProvider";

// components
import IconButton from "../IconButton/IconButton";
import LightBoxBook from "../Book/LightBox/LightBoxBook";

// styles
import styles from "./styles.module.css";

function LightBox() {
  const location = useLocation();

  const { libraryState } = useLibrary();
  const { languageState } = useLanguage();
  const { lightBoxState, setLightBoxState } = useLightBox();

  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") setLightBoxState({ type: "remove" });
    },
    [setLightBoxState]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    if (lightBoxState.id) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [lightBoxState]);

  const selectedBook = useMemo(() => {
    return libraryState.books[lightBoxState.id] || {};
  }, [libraryState, lightBoxState]);

  const closeLightBox = useCallback(() => {
    setLightBoxState({ type: "remove" });
  }, [setLightBoxState]);

  useEffect(() => {
    const { search } = location;
    const params = parseQueries(search);
    if (params.id) setLightBoxState({ type: "set", id: params.id });
  }, [location]);

  return createPortal(
    <section
      className={`${styles.main} ${
        lightBoxState.id
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      }`}
    >
      <IconButton
        name="close-dialog"
        icon={faClose}
        ariaLabel={languageState.texts.ariaLabels.closeDialog}
        onClick={closeLightBox}
        className={`${styles.closeButton}`}
      />
      <LightBoxBook {...selectedBook} />
    </section>,
    document.body
  );
}

export default LightBox;
