import React, { useEffect } from "react";
import ListOfBooks from "./components/ListOfBooks";
import Filters from "./components/Filters";
import FiltersProvider from "./context/contextFiltersProvider";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useSidebar } from "./hooks/useSidebar";

export default function App() {
  const [showSidebar, toggleSidebar] = useSidebar();

  useEffect(() => {
    if(showSidebar) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'auto';
  }, [showSidebar]);

  return (
    <>
      <FiltersProvider>
        <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <main className="relative grid grid-cols-[20%,1fr]">
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
          <Filters />
          <ListOfBooks />
        </main>
      </FiltersProvider>
    </>
  );
}
