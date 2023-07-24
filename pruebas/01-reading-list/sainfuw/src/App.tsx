import { RouterProvider } from "react-router-dom";
import { FiltersProvider } from "./context/FiltersProvider";
import { ReadListProvider } from "./context/ReadListProvider";
import { router } from "./router";

export default function App() {
  return (
    <ReadListProvider>
      <FiltersProvider>
        <RouterProvider router={router} />
      </FiltersProvider>
    </ReadListProvider>
  )
}