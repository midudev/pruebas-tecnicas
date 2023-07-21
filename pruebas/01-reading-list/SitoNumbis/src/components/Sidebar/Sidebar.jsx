import { useEffect, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { faClose } from "@fortawesome/free-solid-svg-icons";

// components
import Empty from "../Empty/Empty";
import Book from "../Book/SidebarBook";
import IconButton from "../IconButton/IconButton";

// contexts
import { useLanguage } from "../../contexts/LanguageProvider";
import { useLibrary } from "../../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { languageState } = useLanguage();
  const { libraryState } = useLibrary();

  const booksToPrint = useMemo(() => {
    const toReturn = [];
    libraryState.readingList.forEach((value) => {
      const book = libraryState.books[value];
      toReturn.push(book);
    });
    console.log(toReturn);
    return toReturn;
  }, [libraryState]);

  const onKeyDown = useCallback(
    (e) => {
      if (location.pathname === "/reading-list")
        if (e.key === "Escape") navigate("/");
    },
    [location.pathname, navigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKeyDown]);

  useEffect(() => {
    if (location.pathname === "/reading-list")
      document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "auto";
  }, [location]);

  const closeSidebar = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <aside
      className={`${styles.main} ${
        location.pathname === "/reading-list"
          ? "translate-x-0"
          : "translate-x-[100%]"
      }`}
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl">{languageState.texts.sidebar.title}</h3>
        <IconButton
          onClick={closeSidebar}
          name="close-sidebar"
          ariaLabel={languageState.texts.ariaLabels.closeSidebar}
          className="text-xl"
          icon={faClose}
        />
      </div>
      {booksToPrint.length ? (
        <ul className={styles.verticalGrid}>
          {booksToPrint.map((book, i) => (
            <Book key={book.ISBN} {...book} i={i} />
          ))}
        </ul>
      ) : (
        <Empty />
      )}
    </aside>
  );
}

export default Sidebar;
