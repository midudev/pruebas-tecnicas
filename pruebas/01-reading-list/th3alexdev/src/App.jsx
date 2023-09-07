import React, { useEffect } from "react";
import ListOfBooks from "./components/ListOfBooks";
import Filters from "./components/Filters";
import FiltersProvider from "./context/contextFiltersProvider";
import ReadListProvider from "./context/contextUserListProvider";
import Header from "./components/Header";
import SlideSidebar from "./components/SlideSidebar";
import StoreInfo from "./components/StoreInfo";
import { useSidebar } from "./hooks/useSidebar";
import './css/index.css'

export default function App() {
  const [showSidebar, toggleSidebar] = useSidebar();

  useEffect(() => {
    if (showSidebar) document.body.style.overflowY = "hidden";
    else document.body.style.overflowY = "scroll";
  }, [showSidebar]);

  return (
    <>
      <ReadListProvider>
        <FiltersProvider>
          <main className="relative bg-background sm:max-w-[1440px] sm:mx-auto sm:overflow-hidden">
            <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar}>
              <SlideSidebar
                showSidebar={showSidebar}
                toggleSidebar={toggleSidebar}
              />
            </Header>
            <section className="w-full relative md:grid sm:grid-cols-[20%,1fr]">
              <aside className="md:fixed md:w-1/5 md:max-w-[280px] flex flex-col h-max gap-8 pt-24 items-center">
                <Filters />
                <StoreInfo />
              </aside>
              <ListOfBooks />
            </section>
          </main>
        </FiltersProvider>
      </ReadListProvider>
    </>
  );
}
