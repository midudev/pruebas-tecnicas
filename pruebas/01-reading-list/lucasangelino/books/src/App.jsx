import React, { useEffect, useContext } from "react";
import Layout from "./components/base/Layout";
import { Library } from "./components/framework/Library";
import { Head } from "./components/framework/Head";
import { Title, Subtitle } from "./components/framework/AppTitles";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { LibraryContext } from "./context/LibraryContext";
import { Footer } from "./components/framework/Footer";

import "./App.css";

function App() {
  const { setReadingList } = useContext(LibraryContext);

  useEffect(() => {
    window.addEventListener("storage", syncTabs);
    return () => window.removeEventListener("storage", syncTabs);
  }, []);

  const syncTabs = (e) => {
    if (e.key === "readingList") {
      setReadingList(JSON.parse(e.newValue));
    }
  };

  return (
    <>
      <Layout>
        {/* <Head>
        <Title />
        <Subtitle />
      </Head> */}
        <Library />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
