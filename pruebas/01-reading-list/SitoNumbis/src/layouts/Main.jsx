import { Fragment, useMemo } from "react";
import loadable from "@loadable/component";

// contexts
import { LightBoxProvider } from "../components/LightBox/LightBoxProvider";
import { useLibrary } from "../contexts/LibraryProvider";

// components
import GenreBar from "../components/GenreBar/GenreBar";
import GridHeader from "../components/Grid/GridHeader";
import Navbar from "../components/Navbar/Navbar";

// styles
import styles from "./styles.module.css";

// suspense components
const ToTop = loadable(() => import("../components/ToTop/ToTop"));
const Footer = loadable(() => import("../components/Footer/Footer"));
const GridBook = loadable(() => import("../components/Grid/GridBook"));
const Sidebar = loadable(() => import("../components/Sidebar/Sidebar"));
const LightBox = loadable(() => import("../components/LightBox/LightBox"));

function Main() {
  const { libraryState } = useLibrary();

  const bookToPrints = useMemo(() => {
    return Object.values(libraryState.books);
  }, [libraryState.books]);

  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <main className={styles.main}>
        <LightBoxProvider>
          <GenreBar />
          <ToTop />
          <LightBox />
          <GridHeader />
          <GridBook books={bookToPrints} />
        </LightBoxProvider>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Main;
