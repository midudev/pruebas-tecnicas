import { createBrowserRouter } from "react-router-dom";
import BookDetail from "./routes/BookDetail";
import BookStore from "./routes/BookStore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BookStore />
  },
  {
    path: "/books",
    element: <BookStore />
  },
  {
    path: "/book/:isbn",
    element: <BookDetail />
  }
])