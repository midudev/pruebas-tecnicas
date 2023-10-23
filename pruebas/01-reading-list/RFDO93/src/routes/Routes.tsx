import {
  createBrowserRouter,
} from "react-router-dom";
import DetailBook from "../pages/DetailBook";
import Home from "../pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/book/:idBook",
    element: <DetailBook />,
  }
]);
 
export default Routes
