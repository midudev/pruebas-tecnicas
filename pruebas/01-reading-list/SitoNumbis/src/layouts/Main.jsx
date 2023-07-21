import { Outlet } from "react-router-dom";
import loadable from "@loadable/component";

// contexts
import { LightBoxProvider } from "../components/LightBox/LightBoxProvider";

// components
import GenreBar from "../components/GenreBar/GenreBar";
import GridHeader from "../components/Grid/GridHeader";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// styles
import styles from "./styles.module.css";
import { Fragment } from "react";

// suspense components
const ToTop = loadable(() => import("../components/ToTop/ToTop"));
const LightBox = loadable(() => import("../components/LightBox/LightBox"));

function Main() {
  return (
    <Fragment>
      <Navbar />
      <main className={styles.main}>
        <LightBoxProvider>
          <GenreBar />
          <ToTop />
          <LightBox />
          <GridHeader />
          <Outlet />
        </LightBoxProvider>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Main;
