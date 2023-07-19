import { RouterProvider } from "react-router-dom";
import { BooksProvider } from "./context/BooksProvider";
import { FiltersProvider } from "./context/FiltersProvider";
import { ReadListProvider } from "./context/ReadListProvider";
import { router } from "./router";

export default function App() {
  return (
    <BooksProvider>
      <ReadListProvider>
        <FiltersProvider>
          <RouterProvider router={router} />
        </FiltersProvider>
      </ReadListProvider>
    </BooksProvider>
  )
}