import React from "react";
import ListOfBooks from "./components/ListOfBooks";
import Filters from "./components/Filters";
import FiltersProvider from "./context/contextFiltersProvider";
import Header from "./components/Header";
import UserSavedBooks from "./components/UserSavedBooks";
import { useSidebar } from "./hooks/useSidebar";

export default function App() {
  const [showSidebar, toggleSidebar] = useSidebar();

  return (
    <>
      <FiltersProvider>
        <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <main className="relative grid grid-cols-[20%,1fr]">
          <UserSavedBooks showSidebar={showSidebar} />
          <Filters />
          <ListOfBooks />
        </main>
      </FiltersProvider>
    </>
  );
}
