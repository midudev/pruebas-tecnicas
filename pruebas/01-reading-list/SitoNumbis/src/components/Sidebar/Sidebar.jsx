import { useLocation } from "react-router-dom";

import { css } from "@emotion/css";

// contexts
import { useLibrary } from "../../contexts/LibraryProvider";

// styles
import styles from "./styles.module.css";

function Sidebar() {
  const location = useLocation();

  const { libraryState, setLibraryState } = useLibrary();

  return (
    <aside
      className={`${styles.main} ${
        location.pathname === "/reading-list"
          ? "translate-x-0"
          : "translate-x-[100%]"
      }`}
    >
      {/* {booksToPrint} */}
    </aside>
  );
}

export default Sidebar;
